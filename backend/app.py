from flask import Flask, jsonify, request, render_template
from flask_assets import Environment
from extractive_summarization import generate_summary_llr
from abstractive_summarization import summarize
from topic_modeling import get_keywords, get_topics
from news_crawling import crawl
from sentiment_analysis import *
from quotation_extraction import *


app = Flask(__name__)
assets = Environment(app)
assets.auto_build = True
app.config["ASSETS_DEBUG"] = True

@app.after_request
def add_cors_headers(response):
    response.headers['Access-Control-Allow-Origin'] = 'http://localhost:3000'
    response.headers['Access-Control-Allow-Headers'] = 'Content-Type'
    response.headers['Access-Control-Allow-Methods'] = 'POST'
    return response

@app.route("/overview", methods=["POST"])
def get_overview():
    num_docs = int(request.form["num_docs"])
    num_words = int(request.form["num_words"])
    num_topics = int(request.form["num_topics"])
    isGeneral = request.form["isGeneral"]  # isGeneral= True
    start_date = request.form["start_date"]  # start_date='2023-05-20'
    end_date = request.form["end_date"]  # end_date='2023-05-25'
    topic = request.form["topic"]  # topic=''
    docs = crawl(isGeneral, num_docs, start_date, end_date, topic)

    result = []
    for doc in docs:
        # get keywords for each doc
        keywords = get_keywords(doc["text"], num_words, docs)
        # get topics for each doc
        topics = get_topics(doc["text"], num_topics, num_words)
        result.append({"keywords": keywords, "topics": topics, "title": doc["title"], "text": doc["text"]})
    return jsonify(result=result)


@app.route("/e_summarize", methods=["POST"])
def handle_extractive_summarization():
    text = request.form["text"]
    num_sentences = int(request.form["num_sentences"])
    summary = generate_summary_llr(text, num_sentences)
    return jsonify(summary=summary)


@app.route("/a_summarize", methods=["POST"])
def handle_abstractive_summarization():
    text = request.form["text"]
    summary = summarize(text)
    return jsonify(summary=summary)


@app.route("/sentiment", methods=["POST"])
def handle_sentiment_analysis():
    sentence_1 = request.form["sentence_1"]
    sentence_2 = request.form["sentence_2"]
    if sentence_1 == "" and sentence_2 == "":
        return jsonify(sentiment="", score="")
    sentiment_1, sentiment_2, score = predict_sentiment(sentence_1, sentence_2)
    # sentiment_1 and sentiment_2 are the 0 or 1 values
    sentiment_1 = "negative" if sentiment_1 == 0 else "positive"
    sentiment_2 = "negative" if sentiment_2 == 0 else "positive"
    return jsonify(sentiment_1=sentiment_1, sentiment_2=sentiment_2, score=score)


@app.route("/quotation", methods=["POST"])
def handle_quotation_extraction():
    article = request.form["article"]
    person_name = request.form["person_name"]
    opinions = extract_person_opinions(article, person_name)
    return jsonify(opinions=opinions)


if __name__ == "__main__":
    app.run(debug=True)
