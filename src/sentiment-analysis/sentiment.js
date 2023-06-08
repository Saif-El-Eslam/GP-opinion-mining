import "./sentiment.css";
import Navbar from "../components/Navbar.js";
// import { Link } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';


function Sentiment({ topic, person }) {

    const [text1, setText1] = useState('');
    const [text2, setText2] = useState('');
    const [res, setRes] = useState(false);

    const handleText1 = (e) => {
        setText1(e.target.value);
    }

    const handleText2 = (e) => {
        setText2(e.target.value);
    }

    const handleAnalyse = () => {
        axios.post("http://127.0.0.1:5000/sentiment" , {
            sentence_1: "test",
            sentence_2:  "test2" 
        })
        .then((response) => {
            console.log(response);
        }, (error) => {
            console.log(error);
        });

        setRes(true);
    }

  return (
    <div className="page">
        <Navbar />
        <div className="sentiments-wrapper">
            <div className="sentiment">
                <div className="sentiment-wrapper">
                    <h1 className="sentiment-header">
                        {topic ? topic : "Analyse"}{" "}
                    </h1>

                    <div className="sentiment-content">
                        <textarea
                            id="text1"
                            type="text"
                            name="text1"
                            value={text1}
                            placeholder="Enter your text"
                            onChange={handleText1}
                        ></textarea>
                    </div>
                </div>

                <div className="sentiment-wrapper">
                    <h1 className="sentiment-header"> Compare with<span className="optional">(Optional)</span> </h1>

                    <div className="sentiment-content">
                    <textarea
                        id="text2"
                        type="text"
                        name="text2"
                        value={text2}
                        placeholder="Enter text to compare with"
                        onChange={handleText2}
                    ></textarea>
                    </div>

                    {/* <Link className="margin-top-down-50" to="/comparison-result">
                        {" "} */}
                    {/* </Link> */}
                </div>

                <div className="analyze-buttom">
                    <button disabled={!text1} id={!text1 ? "disabled-button" : "enabled-button"} onClick={handleAnalyse}>analyse</button>{" "}
                </div>

            </div>
            {res && <div className="sentiment-results">
                {/* three devs 1- for the sentiment of the first one 2- the score bar 3- sentiment of the second one */}
                {res && <div className="sentiment-result">
                    <div className="sentiment-result-wrapper">
                        <div>
                            <h1 className="sentiment-result-header">Sentiment 1</h1>
                            <p className="sentiment-result-content">Positive</p>
                        </div>

                        <div>
                            <h1 className="sentiment-result-header">Similarity Score</h1>
                            <div className="similarity-bar">
                                <div className="progress-bar" style={{width: `${10}%`}}></div>
                            </div>
                        </div>

                        <div>
                            <h1 className="sentiment-result-header">Sentiment 2</h1>
                            <p className="sentiment-result-content">Negative</p>
                        </div>
                    </div>
                </div>}
            </div>}
        </div>
    </div>
  );
}

export default Sentiment;
