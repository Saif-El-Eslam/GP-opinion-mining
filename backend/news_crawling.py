from newsapi import NewsApiClient
import json
import requests
import requests
from bs4 import BeautifulSoup
import os
# time 
from datetime import datetime, timedelta
import time
def crawl(isGeneral= 'True',num_topics= 5, start_date= datetime.today().strftime('%Y-%m-%d'),end_date= (datetime.today() ).strftime('%Y-%m-%d'),topic='',sort_by='relevancy'):
    API_KEY='37ac47e431c2496fbe665db359687bf0'
    articles = []
    if isGeneral == 'True':
        # set the News API endpoint and API key
        url = 'https://newsapi.org/v2/top-headlines'
        params = {
            'apiKey': API_KEY,
            'country': 'us',
            'pageSize': num_topics,  # set the number of results you want to get
            'page': 1, 
            'sortBy': 'popularity',
            'q': '',
            'from': start_date,
            'to': end_date
        }

        response = requests.get(url, params=params)
        if response.status_code == 200:
            articles =response.json()['articles']
        else:
            print('Error:', response.status_code)
    
    else:
        print('topic: ', topic)
        url = 'https://newsapi.org/v2/everything'
        params = {
            'apiKey': API_KEY,
            'q': topic,
            'from': start_date,
            'to': end_date,
            'sortBy': sort_by,
            'pageSize': num_topics,  # set the number of results you want to get
            'page': 1
        }
        response = requests.get(url, params=params)
        if response.status_code == 200:
            articles =response.json()['articles']
        else:
            print('Error:', response.status_code)

    docs=[]

    for article in articles:
        url = article['url']
        page = requests.get(url)
        soup = BeautifulSoup(page.content, 'html.parser')
        text = soup.find_all('p')
        text = [t.get_text() for t in text]
        text = ' '.join(text)
        docs.append({'title':article['title'], 'text':text})
    return docs

if __name__ == "__main__":
    docs = crawl(isGeneral= True,num_topics= 5, start_date='2023-05-20',end_date='2023-05-25',topic='',sort_by='relevancy')
    print(docs)
    # print(len(docs))
    # print(docs[0])
    # print(docs[0]['title'])
    # print(docs[0]['text'])


    