#method 3 : LLR
import nltk
from nltk.tokenize import sent_tokenize
from nltk.probability import FreqDist
from math import log

import math

def calculate_llr(word, corpus):
    fd_word = FreqDist()
    fd_corpus = FreqDist()

    for text in corpus:
        if word in text:
            fd_word[word] += 1
        for token in text:
            fd_corpus[token] += 1

    word_count = fd_word[word]
    corpus_size = len(corpus)
    word_freq = fd_corpus.freq(word)

    if word_count <= 0 or word_freq <= 0 or word_freq >= 1:
        return 0  # Return a default value or handle as desired

    try:
        llr_value = (
            2
            * (
                word_count * math.log(word_count / (corpus_size * word_freq))
                + (corpus_size - word_count) * math.log((corpus_size - word_count) / (corpus_size * (1 - word_freq)))
            )
        )
        return llr_value
    except ValueError:
        return 0  # Return a default value or handle as desired

def generate_summary_llr(text, num_sentences):
    sentences = sent_tokenize(text)
    corpus = [sentence.split() for sentence in sentences]
    scores = []
    
    for sentence in corpus:
        sentence_score = sum(calculate_llr(word, corpus) for word in sentence)
        scores.append(sentence_score)
    
    summary_indices = sorted(range(len(scores)), key=lambda i: scores[i], reverse=True)[:num_sentences]
    summary = [sentences[index] for index in summary_indices]
    
    return ' '.join(summary)


