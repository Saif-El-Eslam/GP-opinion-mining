import React from "react";
import { useState } from "react";
// import { Link } from "react-router-dom";
import "./summary.css";
import Navbar from "../nav-bar/Navbar";
import TypingEffect from "./typing-effect/typingEffect";
import { useLocation, useNavigate, Switch } from 'react-router-dom';

function Summary() {
  const navigate = useNavigate();

  const location = useLocation()
  const { article } = location.state != null ? location.state : { article: "" }
  const [text, setText] = useState(article);
  const handleText = (e) => {
    setText(e.target.value);
  }

  const [summary, setSummary] = useState("");
  const handleSummarize = () => {
    setSummary("This is the summary, its a very good summary, its the best summary ever.");
  }

  const handleGetSentiment = () => {
    // navigate to sentiment page with the summary
    navigate('/sentiment-analysis', { state: { summary: summary } });
  }

  const [selectedOption, setSelectedOption] = useState('option1');
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  
  return (
    <div className="page">
      <Navbar />
      <div className="summary-page-wrapper">
        <div className="summary">
          <div className="text-wrapper-summary">
            <h1 className="text-header">
                {"Article"}{" "}
            </h1>

            <div className="text-content" style={{width: summary.length === 0 ? '60%' : '90%'}}>
                <textarea
                    id="text-summary"
                    type="text"
                    name="text"
                    value={text}
                    placeholder="Enter your text"
                    onChange={handleText}
                ></textarea>
            </div>
          </div>

          <div className="switch-wrapper">
            <div>
              <label>
                <input type="radio" value="option1" checked={selectedOption === 'option1'} onChange={handleOptionChange} />
                Extractive
              </label>

              <label>
                <input type="radio" value="option2" checked={selectedOption === 'option2'} onChange={handleOptionChange} />
                Abstractive
              </label>
            </div>

          </div>

          <div className="button-wrapper">
            <button disabled={!text} id={!text?'disabled-button':'enabled-button'} onClick={handleSummarize} >
              Summarize
            </button>
          </div>
        </div>

        {summary ? <div className="summary-results">
            
            <h1>Summary</h1>
            
            <div className="summary-wrapper">
                {/* <div className="summary-text">{summary}</div> */}
                <TypingEffect text={summary} />
            </div>

            <div className="get-sentiment-button-wrapper">
              <button disabled={!text} id={!text?'disabled-button':'enabled-button'} onClick={handleGetSentiment} >
                Get Sentiment
              </button>
            </div>

        </div> : null}
      </div>
   
    </div>
  );
};

export default Summary;
