import nltk


def download_nltk_resources():
    nltk.download("punkt")
    nltk.download("averaged_perceptron_tagger")
    nltk.download("maxent_ne_chunker")
    nltk.download("words")


def extract_person_opinions(article, person_name):
    sentences = nltk.sent_tokenize(article)
    opinions = []
    for sentence in sentences:
        if person_name in sentence:
            opinions.append(sentence)

    return opinions


# Example usage
if __name__ == "__main__":
    article = "Joe Biden emphasized the importance of addressing climate change during his speech. He stated, 'Climate change is a global crisis that requires immediate action.' Biden believes that investing in renewable energy is key to combating climate change. He also expressed concern over the impact of rising temperatures on ecosystems. In his opinion, the Paris Agreement plays a crucial role in global efforts to tackle climate change."
    person_name = "Joe Biden"
    opinions = extract_person_opinions(article, person_name)
    print("Opinions about " + person_name + ":")
    for opinion in opinions:
        print(opinion)
