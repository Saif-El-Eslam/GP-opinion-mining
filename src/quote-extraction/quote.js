import React from "react";
import { useState } from "react";
// import { Link } from "react-router-dom";
import "./quote.css";
import Navbar from "../nav-bar/Navbar";
import QuoteCard from "./quote-card/quoteCard";
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Quote() {
  const navigate = useNavigate();
  const location = useLocation()
  const { article } = location.state != null ? location.state : { article: "" }

  const [text, setText] = useState(article);

  const handleText = (e) => {
    setText(e.target.value);
  }

  const [quotes, setQuotes] = useState([]);

  const handleExtract = () => {
    setQuotes(["quote1 sjdkd jsdfhsdlhfj jdskfhudsl quote1 sjdkd jsdfhsdlhfj jdskfhudsl quote1 sjdkd jsdfhsdlhfj jdskfhudsl", "quote2", "quote3", "quote4", "quote5", "quote6"]);
  }


  const handleGetSentiment = (clickedQuote) => {
    // navigate to sentiment page with the summary
    navigate('/sentiment-analysis', { state: { quote: clickedQuote } });
  }

  return (
    <div className="page">
      <Navbar />
      <div className="quote-page-wrapper">
        <div className="quote">
          <div className="text-wrapper">
            <h1 className="text-header">
                {"Article"}{" "}
            </h1>

            <div className="text-content" style={{width: quotes.length === 0 ? '60%' : '90%'}}>
                <textarea
                    id="text"
                    type="text"
                    name="text"
                    value={text}
                    placeholder="Enter your text"
                    onChange={handleText}
                ></textarea>
            </div>
          </div>

          <div className="button-wrapper">
            <button disabled={!text} id={!text?'disabled-button':'enabled-button'} onClick={handleExtract} >
              Extract Quotes
            </button>
          </div>
        </div>

        {quotes.length ? <div className="quote-results">

          <div className="quotes-wrapper">
            <h1>Quotes</h1>


            <div className="quotes-container">

              {quotes.map((quote, i) => (
                <div key={i} onClick={()=>handleGetSentiment(quote)}>
                  <QuoteCard quote={quote} />
                </div>
              ))}

            </div>
          </div>

        </div> : null}
      </div>
   
    </div>
  );
};

export default Quote;
