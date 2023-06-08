import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* add logo from images */}

      <ul className="navbar__list">
        
        <li className="navbar__item">
          <Link to="/topic-extraction" className="navbar__link">Topic Extractor</Link>
        </li>
        <li className="navbar__item">
          <Link to="/quote-extraction" className="navbar__link">Quote Extractor</Link>
        </li>
        <li className="navbar__item">
          <Link to="/summarizer" className="navbar__link">Summarizer</Link>
        </li>
        <li className="navbar__item">
          <Link to="/sentiment-analysis" className="navbar__link">Sentiment Analyser</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
