import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "../images/Logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* add logo from images */}
        <Link to="/" className="navbar__link">
          <div className="navbar__logo">
            <img src={Logo} alt="logo" className="navbar-logo" />
          </div>
        </Link>

      <ul className="navbar__list">
        
        <li className="navbar__item">
          <Link to="/search-articles" className="navbar__link">Search Articles</Link>
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
