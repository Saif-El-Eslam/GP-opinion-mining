import "./articlesResults.css";
import Article from "./articleCard";
import Navbar from '../../components/Navbar';
import { useNavigate } from 'react-router-dom';


import { useState } from "react";

function Articles() {
    const navigate = useNavigate();


    const [topics, setTopics] = useState([
        "Russia’s Brutal and Unprovoked Invasion of Ukraine",
        "Topic 2",
        "Topic 3",
        "Topic 4",
        "Topic 5",
        "Topic 6",
        "Topic 7",
    ]);

    const [kewwords, setKeywords] = useState(["keyword1", "keyword2", "keyword3", "keyword4", "keyword5", "keyword6", "keyword7"]);

    return (
        <div className='page'>
            <Navbar />

            <div className="articles">
                <div className="articles-wrapper">            
                    <div className="articles-header">
                        <h1>Found Articles</h1>
                    </div>

                    <div className="articles-content">
                        {topics.map((topic, i) => (
                            <div key={i} onClick={() => navigate('/article-details')} className="article-wrapper">
                                <Article topic={topic} keywords={kewwords}/>
                                </div>
                        ))}
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Articles;
