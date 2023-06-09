import './App.css';
import StartPage from './start-Page/StartPage';
import Articles from './search-articles/articles-results/articlesResults';
import SearchArticles from './search-articles/searchArticlesForm';
import ArticleDetails from './search-articles/article-details/articleDetails';
import Summary from './summarization/summary';
import Quote from './quote-extraction/quote';
import Sentiment from './sentiment-analysis/sentiment';

import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage />} />

        <Route path="/search-articles" element={<SearchArticles />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/article-details" element={<ArticleDetails />} />

        <Route path="/summarizer" element={<Summary />} />
        <Route path="/quote-extraction" element={<Quote />} />
        <Route path="/sentiment-analysis" element={<Sentiment />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
