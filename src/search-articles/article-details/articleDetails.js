import "./articleDetails.css";
import Navbar from '../../nav-bar/Navbar';
import WordCloud from "../word-cloud/wordCloud";

import { useState } from "react";

function ArticleDetails() {

  const [article, setArticle] = useState("Breonna Taylor would be 27 today. She was 26 years old when she was shot to death by the police after a day of serving her community as a first responder. Although her name has become known after her death, her life paints a legacy of light, love, and unparalleled kindness. Among others, she leaves behind her mother Tamika Palmer, her sister JuNiyah Palmer, her cousin Preonia Flakes, her older-sister-cousin Katrina Curry, and her best friends Alena Battle and Erinicka Hunter, all six of whom she told Teen Vogue about the ways Breonna changed their lives for the better by living the Bree way When Breonna was a child, her mother knew she was destined for greatness. Tamika recalls that after Breonna witnessed her take her diabetic grandmothers blood sugar, Breonna was eager to do it too, foreshadowing Breonnas future in the medical field. Reminiscing, Tamika says, “It was the cutest thing. Throughout her life, those who knew her say Breonna expressed her love for others through empowerment and support. When she was in high school, her teacher called her mother because Breonna would not go to the pizza party in another classroom for students doing exceptionally well because her friends were not invited. When her mother received the call, she tells Teen Vogue that she said, If your friends dont want to see you do great, theyre not your friends. To which Breonna replied, Im going to help my friends be great. Later in life, her motto would become, “All you can do every day is wake up, pray, and slay. It never sat right with Breonna to elevate herself without bringing people up with her. Her best friend Alena says Breonna was like her walking diary that she could open up to. No matter the distance, Alena and Breonna would always find time and space for each other. Breonna Taylor would be 27 today. She was 26 years old when she was shot to death by the police after a day of serving her community as a first responder. Although her name has become known after her death, her life paints a legacy of light, love, and unparalleled kindness. Among others, she leaves behind her mother Tamika Palmer, her sister JuNiyah Palmer, her cousin Preonia Flakes, her older-sister-cousin Katrina Curry, and her best friends Alena Battle and Erinicka Hunter, all six of whom she told Teen Vogue about the ways Breonna changed their lives for the better by living the Bree way When Breonna was a child, her mother knew she was destined for greatness. Tamika recalls that after Breonna witnessed her take her diabetic grandmothers blood sugar, Breonna was eager to do it too, foreshadowing Breonnas future in the medical field. Reminiscing, Tamika says, “It was the cutest thing. Throughout her life, those who knew her say Breonna expressed her love for others through empowerment and support. When she was in high school, her teacher called her mother because Breonna would not go to the pizza party in another classroom for students doing exceptionally well because her friends were not invited. When her mother received the call, she tells Teen Vogue that she said, If your friends dont want to see you do great, theyre not your friends. To which Breonna replied, Im going to help my friends be great. Later in life, her motto would become, “All you can do every day is wake up, pray, and slay. It never sat right with Breonna to elevate herself without bringing people up with her. Her best friend Alena says Breonna was like her walking diary that she could open up to. No matter the distance, Alena and Breonna would always find time and space for each other."); // State to store the article text
  const [keywords, setKeywords] = useState([
    { text: 'State', value: 0.047 },
    { text: 'California', value: 0.034 },
    { text: 'Company', value: 0.036 },
    { text: 'Fire', value: 0.026 },
    { text: 'Wild Fire', value: 0.022 },
    { text: 'State', value: 0.017 },
    { text: 'California', value: 0.064 },
    { text: 'Company', value: 0.046 },
    { text: 'Fire', value: 0.036 },
    { text: 'Wild Fire', value: 0.052 },
  ]);

  const handleSummarize = () => {
    // navigate to the summary page with the article text
    // navigate('/summarizer', { state: { article: article } });
  };

  const handleExtractQoutes = () => {
    // navigate to the summary page with the article text
    // navigate('/qoute-extraction', { state: { article: article } });
  };

  

  return (
    <div className='page'>
        <Navbar />

        <div className="article-details">
          <div className="left-half">

            <div className="header-button">
              <h2 className="section-title">Article</h2>
              <button className="summarize-button" onClick={handleSummarize}>
                Summarize
              </button>
              <button className="extract-qoutes-button" onClick={handleExtractQoutes}>
                Extract Qoutes
              </button>
            </div>

            <div className="article-content">
              <div className="article-content-wrapper"><div>{article}</div></div>
            </div>
            {/* <div className="summary">
              <h3>Summary:</h3>
              <p>{summary}</p>
            </div> */}
          </div>

          <div className="right-half">
            <h2 className="section-title">Cloud Of Words</h2>
            <div className="keyword-cloud">
              
              <WordCloud words={keywords}/>
              <WordCloud words={keywords}/>
              <WordCloud words={keywords}/>

            </div>
          </div>
        </div>
        
    </div>
  );
}

export default ArticleDetails;
