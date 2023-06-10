import './startPage.css';
import Navbar from '../nav-bar/Navbar';
import InfoCard from './info-card/infoCard';
import SearchArticle from '../images/search-articles.png';
import QuoteExtractor from '../images/quote-extractor.png';
import Summarizer from '../images/summarizer.png';
import sentimentAnalyzer from '../images/sentiment-analyzer.png';

import { Link } from "react-router-dom";

function StartPage() {

  const summaryDescription = "This is temp description About our team. it should be consist of a couuple of lines so iam trying to extend it as much as i could. This is temp description. This is temp description. This is temp description. ";
  const searchArticleDescription = "Get Articles from the web, about any topic or any person you want, or the trending articles.";
  const quoteExtractorDescription = "Get Quotes from your text, or from the article you searched for.";
  const summarizerDescription = "Get a summary of your text, or a summary of the article you searched for.";
  const sentimentAnalyzerDescription = "Get sentiment of your text, and compare it with the sentiment of the summary.";


  return (
    <div className='page'>
      <Navbar home={false} />
      <div className='home-page-wrapper'>
        
        <div className='home-summary-wrapper'>
          <div className='summary-wrapper-header'>
            <div> OPINION PILOT </div>
          </div>

          <div className='summary-wrapper-content'>
            <div> {summaryDescription} </div>
          </div>
        </div>


        <div className='cards-wrapper'>
          <Link to="/search-articles" className="card-link">
            <InfoCard Logo={SearchArticle} Header="Search Articles" Description={searchArticleDescription} />
          </Link>
          <Link to="/quote-extraction" className="card-link">
            <InfoCard Logo={QuoteExtractor} Header="Quote Extractor" Description={quoteExtractorDescription} />
          </Link>
          <Link to="/summarizer" className="card-link">
            <InfoCard Logo={Summarizer} Header="Summarizer" Description={summarizerDescription} />
          </Link>
          <Link to="/sentiment-analysis" className="card-link">
            <InfoCard Logo={sentimentAnalyzer} Header="Sentiment Analyzer" Description={sentimentAnalyzerDescription} />
          </Link>
        </div>

      </div>
    </div>
  );
}

export default StartPage;
