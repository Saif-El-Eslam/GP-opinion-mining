import React from "react";
import { useState } from "react";
// import { Link } from "react-router-dom";
import "./summary.css";
import Navbar from "../nav-bar/Navbar";

function Summary() {

  const [text, setText] = useState('');

  const handleText = (e) => {
    setText(e.target.value);
  }

  const [summary, setSummary] = useState("");

  const handleExtract = () => {
    setSummary("quote1 sjdkd jsdfhsdlhfj jdskfhudsl quote2 quote3 quote4 quote5 quote6 quote1 sjdkd jsdfhsdlhfj jdskfhudsl quote2 quote3 quote4 quote5 quote6 quote1 sjdkd jsdfhsdlhfj jdskfhudsl quote2 quote3 quote4 quote5 quote6");
  }

  return (
    <div className="page">
      <Navbar />
      <div className="summary-page-wrapper">
        <div className="summary">
          <div className="text-wrapper">
            <h1 className="text-header">
                {"Article"}{" "}
            </h1>

            <div className="text-content" style={{width: summary.length === 0 ? '60%' : '90%'}}>
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
              Summarize
            </button>
          </div>
        </div>

        {summary ? <div className="summary-results">
            <h1>Summary</h1>
            
            <div className="summary-wrapper">
                {summary}
            </div>
        </div> : null}
      </div>
   
    </div>
  );
};

export default Summary;
