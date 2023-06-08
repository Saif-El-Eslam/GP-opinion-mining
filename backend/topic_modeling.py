#imports 
from collections import defaultdict
import json
import gensim
from gensim import corpora
from gensim.models.phrases import  Phraser
from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords
stop_words = set(stopwords.words('english'))
from nltk.stem.wordnet import WordNetLemmatizer
from nltk.collocations import BigramAssocMeasures, BigramCollocationFinder

#functions
# counting frequency
class TopicExtractor:
    def __init__(self, stopwords_path, verbs_path):
        with open(stopwords_path, "r") as f:
            self.stopwords = set(json.load(f))
        with open(verbs_path, "r") as f:
            self.verbs = set(json.load(f))
        self.vocab = defaultdict(int)

    def preprocess(self, doc):
        processed_doc = [word.lower() for word in doc.split() if word.lower() not in self.stopwords and word.lower() not in self.verbs and word.isalpha()]
        return processed_doc
    
    def train(self, docs):
        #drop empty docs
        for doc in docs:
            text = doc["text"]
            processed_doc = self.preprocess(text)
            for i in range(len(processed_doc)):
                self.vocab[processed_doc[i]] += 1
                if i < len(processed_doc)-1:
                    word_combo = processed_doc[i] + ' ' + processed_doc[i+1] 
                    self.vocab[word_combo] += 1
        self.vocab = dict(sorted(self.vocab.items(), key=lambda x: x[1], reverse=True))

    def predict(self, doc,num_words):
        processed_doc = self.preprocess(doc)
        doc_freq = defaultdict(int)

        for i in range(len(processed_doc)):
            doc_freq[processed_doc[i]] += 1
            if i < len(processed_doc)-1:
                word_combo = processed_doc[i] + ' ' + processed_doc[i+1]
                doc_freq[word_combo] += 1

        sorted_doc_freq = dict(sorted(doc_freq.items(), key=lambda x: x[1], reverse=True))
        top_topics = list(sorted_doc_freq.keys())[:num_words]
        total_freq = sum(sorted_doc_freq.values())
        normalized_freq = [round((sorted_doc_freq[t]/total_freq)*100, 2) for t in top_topics]

        return dict(zip(top_topics, normalized_freq))
        

#LDA 
# LDA 

def preprocess_text(text):
    # Tokenize the text
    tokens = word_tokenize(text.lower())
    # Remove stop words
    stop_words = set(stopwords.words('english'))
    tokens = [token for token in tokens if token not in stop_words]
    # Remove punctuation and non-alphabetic characters
    tokens = [token for token in tokens if token.isalpha()]
    # Lemmatize tokens
    lemmatizer = WordNetLemmatizer()
    tokens = [lemmatizer.lemmatize(token) for token in tokens]
    # Build bigrams
    # Create a bigram finder
    bigram_finder = BigramCollocationFinder.from_words(tokens)

    # Set the bigram association measure
    bigram_measures = BigramAssocMeasures()

    # Get the top 10 bigrams based on their frequency
    top_bigrams = bigram_finder.nbest(bigram_measures.raw_freq, 15)
    #convert bigrams to strings
    top_bigrams = [' '.join(bigram) for bigram in top_bigrams]

    # append bigrams to tokens
    tokens = tokens + top_bigrams

    return tokens



def get_topics(text, num_topics, num_words):
    # Preprocess the text
    text_tokens = preprocess_text(text)
    # Create a dictionary and corpus
    dictionary = corpora.Dictionary([text_tokens])
    corpus = [dictionary.doc2bow([token]) for token in text_tokens]

    # Build the LDA model
    lda_model = gensim.models.ldamodel.LdaModel(corpus, num_topics=num_topics, id2word=dictionary, passes=10)
    # Get the topics
    topics = lda_model.print_topics(num_words=num_words, num_topics=num_topics)
    return topics


def get_keywords(text, num_words, docs):
    stopwords_path = "stopwords.json"
    verbs_path = "verbs.json"
    topic_extractor = TopicExtractor(stopwords_path, verbs_path)
    topic_extractor.train(docs)
    keywords = topic_extractor.predict(text, num_words)
    return keywords


if __name__ == "__main__":
    docs = [
        {
            "text": "The Lord of the Rings is an epic high-fantasy novel written by English author and scholar J. R. R. Tolkien. The story began as a sequel to Tolkien's 1937 fantasy novel The Hobbit, but eventually developed into a much larger work. Written in stages between 1937 and 1949, The Lord of the Rings is one of the best-selling novels ever written, with over 150 million copies sold.",
            "title": "The Lord of the Rings"
        },
        {
            "text": "The Hobbit, or There and Back Again is a children's fantasy novel by English author J. R. R. Tolkien. It was published on 21 September 1937 to wide critical acclaim, being nominated for the Carnegie Medal and awarded a prize from the New York Herald Tribune for best juvenile fiction. The book remains popular and is recognized as a classic in children's literature.",
            "title": "The Hobbit"
        }
    ]
    text = "The Lord of the Rings is an epic high-fantasy novel written by English author and scholar J. R. R. Tolkien. The story began as a sequel to Tolkien's 1937 fantasy novel The Hobbit, but eventually developed into a much larger work. Written in stages between 1937 and 1949, The Lord of the Rings is one of the best-selling novels ever written, with over 150 million copies sold."
    num_words = 5

    keywords = get_keywords(text, num_words, docs)
    # print(keywords)

    num_topics = 5
    topics = get_topics(text, num_topics, num_words)
        #topics is a list of tuples, each tuple is (topic_id, topic_string) 
    print(topics)


