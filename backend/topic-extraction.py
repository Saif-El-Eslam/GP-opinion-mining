import re
import numpy as np

# define the number of topics and the number of iterations to run the algorithm for
num_topics = 1
num_iterations = 1000

# define the regularization parameter
alpha = 0.1
beta = 0.01

# read in the text data
with open('text.txt', 'r') as f:
    text = f.read()

# clean the text by removing punctuation and converting to lowercase
text = re.sub(r'[^\w\s]', '', text)
text = text.lower()

# create a vocabulary from the text
words = text.split()
vocabulary = list(set(words))
word_to_id = {word: i for i, word in enumerate(vocabulary)}
id_to_word = {i: word for i, word in enumerate(vocabulary)}

# create a document-term matrix
doc_term_matrix = np.zeros((len(words), len(vocabulary)))
for i, word in enumerate(words):
    doc_term_matrix[i, word_to_id[word]] += 1

# initialize the topic-term and document-topic distributions
topic_term_dist = np.random.rand(num_topics, len(vocabulary))
doc_topic_dist = np.random.rand(len(words), num_topics)

# run the algorithm for the specified number of iterations
for i in range(num_iterations):
    # update the topic-term distribution
    for k in range(num_topics):
        numerator = np.zeros(len(vocabulary))
        denominator = 0
        for j in range(len(words)):
            numerator += doc_term_matrix[j, :] * doc_topic_dist[j, k]
            denominator += np.sum(doc_term_matrix[j, :]) * doc_topic_dist[j, k]
        topic_term_dist[k, :] = (numerator + beta) / \
            (denominator + len(vocabulary) * beta)

    # update the document-topic distribution
    for j in range(len(words)):
        numerator = np.zeros(num_topics)
        denominator = 0
        for k in range(num_topics):
            numerator[k] = topic_term_dist[k,
                                           word_to_id[words[j]]] * doc_topic_dist[j, k]
            denominator += topic_term_dist[k, word_to_id[words[j]]
                                           ] * np.sum(doc_term_matrix[j, :])
        doc_topic_dist[j, :] = (numerator + alpha) / \
            (denominator + num_topics * alpha)

# extract the topic with the highest probability for each word
topics = np.argmax(doc_topic_dist, axis=1)
topic_words = {}
for i, topic in enumerate(topics):
    if topic not in topic_words:
        topic_words[topic] = []
    topic_words[topic].append(id_to_word[word_to_id[words[i]]])

# print the top words for each topic
for i in range(num_topics):
    print(
        f'Topic {i}: {", ".join(sorted(topic_words[i], key=lambda x: -doc_topic_dist[word_to_id[x], i])[:10])}')
