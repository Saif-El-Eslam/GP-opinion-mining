import './App.css';
import StartPage from './Module1/StartPage';
import Topics from './Module1/Topics';
import Summary from './summarization/summary';
import Quote from './quote-extraction/quote';
import Sentiment from './sentiment-analysis/sentiment';


import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage />} />


        <Route path="/summarizer" element={<Summary />} />
        <Route path="/quote-extraction" element={<Quote />} />
        <Route path="/sentiment-analysis" element={<Sentiment />} />

        <Route path="/topics" element={<Topics />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
