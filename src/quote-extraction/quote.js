import React from "react";
import { useState } from "react";
// import { Link } from "react-router-dom";
import "./quote.css";
import Navbar from "../nav-bar/Navbar";

function Quote() {

  const [text, setText] = useState('');

  const handleText = (e) => {
    setText(e.target.value);
  }

  const [quotes, setQuotes] = useState([]);

  const handleExtract = () => {
    setQuotes(["quote1 sjdkd jsdfhsdlhfj jdskfhudsl", "quote2", "quote3", "quote4", "quote5", "quote6"]);
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
                <div key={i}>
                  <div className="quote-wrapper">
                    <div className="quote-content">
                      {quote}
                    </div>
                  </div>
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
