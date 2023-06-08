import pickle
import re
import nltk
from nltk.stem import WordNetLemmatizer
from nltk.stem import PorterStemmer
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.svm import LinearSVC

class SentimentAnalyzerSVM:
    def __init__(self, data_dir='aclimdb'):
        self.data_dir = data_dir
        self.train_data = []
        self.train_labels = []
        self.test_data = []
        self.test_labels = []
        self.stopwords = []
        self.vectorizer = TfidfVectorizer()

    def load_data(self):
        """
        This method loads the data from the text files.
        """
        for dataset in ['train', 'test']:
            for sentiment in ['neg', 'pos']:
                folder = os.path.join(self.data_dir, dataset, sentiment)
                for filename in os.listdir(folder):
                    with open(os.path.join(folder, filename), 'r') as f:
                        if dataset == 'train':
                            words = f.read().split()
                            self.train_data.append(' '.join(words))
                            self.train_labels.append(0 if sentiment == 'neg' else 1)
                        else:
                            words = f.read().split()
                            self.test_data.append(' '.join(words))
                            self.test_labels.append(0 if sentiment == 'neg' else 1)
                print("loaded ", dataset, sentiment)

    def train(self):
        """
        This method trains a Naive Bayes classifier on the training data.
        """
        X_train = self.vectorizer.fit_transform(self.train_data)
        self.classifier = LinearSVC()
        self.classifier.fit(X_train, self.train_labels)

    def predict(self, text):
        """
        This method predicts the sentiment of the given text.
        """

        words = preprocess_text(text).split()
        X = self.vectorizer.transform([' '.join(words)])

        # get sentiment
        sentiment = self.classifier.predict(X)[0]
        # get score vector
        score = self.classifier.decision_function(X)[0]
        
        return sentiment, score

    def evaluate(self):
        """
        This method evaluates the accuracy of the classifier on the test data.
        """
        X_test = self.vectorizer.transform(self.test_data)
        y_pred = self.classifier.predict(X_test)
        return classification_report(self.test_labels, y_pred)

# Preprocess the text data
stop_words = []
with open('stopwords.txt', 'r') as f:
    stop_words = f.read().splitlines()

def preprocess_text(text):
    # Remove HTML tags
    text = re.sub('<.*?>', '', text)

    # Remove numbers 
    text = re.sub(r'\d+', '', text)
    # Remove punctuation
    text = re.sub(r'[^\w\s]', ' ', text)
    # Remove non-ASCII characters
    text = re.sub(r'[^\x00-\x7F]+', '', text)
    
    # print(text)
    # Remove extra whitespace
    text = re.sub('\s+', ' ', text).strip()

    # Convert to lowercase
    text = text.lower()

    # Tokenize the text
    words = nltk.word_tokenize(text)

    # Remove stop words 
    words = [word for word in words if word not in stop_words]

    # Lemmatize the words
    lemmatizer = WordNetLemmatizer()
    words = [lemmatizer.lemmatize(word) for word in words]
    # # stem the words
    stemmer = PorterStemmer()
    words = [stemmer.stem(word) for word in words]

    # Join the words back into a single string
    text = ' '.join(words)

    return text


# def similarityScore(x, y):
def similarityScore(float1, float2):
    sum1 = abs(float1) + abs(float2)
    difference = abs(abs(float1) - abs(float2))
    if float1 * float2 > 0:
        similarity_percentage = 1 - (difference / sum1)
        similarity_percentage = similarity_percentage * .5 + .5
    else:
        similarity_percentage = 1 - (difference / sum1)
        similarity_percentage = similarity_percentage * .5
    return similarity_percentage



def predict_sentiment(text1 = "", text2 = ""):
    # Load the model
    filename = 'sentiment_model_endpoint.sav'
    model = pickle.load(open(filename, 'rb'))

    if not isinstance(text1, str) or not isinstance(text2, str):
        return "Error: Please enter a string"
    elif text1 == "" and text2 == "":
        return "Error: Please enter at least one string"
    elif text1 == "":
        sentiment, score = model.predict(text2)
        return sentiment
    elif text2 == "":
        sentiment, score = model.predict(text1)
        return sentiment
    else:
        sentiment1, score1 = model.predict(text1)
        sentiment2, score2 = model.predict(text2)
        similarity = similarityScore(score1, score2)
        return sentiment1, sentiment2, similarity


if __name__ == '__main__':
    # test on a single string
    text1 = "I love this movie, it's great!"
    text2 = "I hate this movie, it's bad!"

    sentiment1, sentiment2, similarity = predict_sentiment(text1, text2)    
    print("Sentiment 1: ", sentiment1)
    print("Sentiment 2: ", sentiment2)
    print("Similarity: ", similarity)

