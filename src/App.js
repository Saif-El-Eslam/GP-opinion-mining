import './App.css';
import StartPage from './Module1/StartPage';
import Topics from './Module1/Topics';
import Opinion from './Module2/Opinion';
import CompRes from './Module3/CompRes';
import Sentiment from './sentiment-analysis/sentiment';

import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage />} />

        <Route path="/sentiment-analysis" element={<Sentiment />} />

        {/*<Route path="/topics" element={<Topics />} />
        <Route path="/opinion" element={<Opinion />} />
        <Route path="/comparison-result" element={<CompRes />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
