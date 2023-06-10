import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "../images/Logo.png";

const Navbar = ({ home }) => {
  return (
    <nav className={home ? "navbar-home" : "navbar"}>
      {/* add logo from images */}
        <Link to="/" className={home ? "navbar__link-home" : "navbar__link"}>
          <div className="navbar__logo">
            <img src={Logo} alt="logo" className="navbar-logo" />
          </div>
        </Link>

      <ul className="navbar__list">
        
        <li className="navbar__item">
          <Link to="/search-articles" className={home ? "navbar__link-home" : "navbar__link"}>Search Articles</Link>
        </li>
        <li className="navbar__item">
          <Link to="/quote-extraction" className={home ? "navbar__link-home" : "navbar__link"}>Quote Extractor</Link>
        </li>
        <li className="navbar__item">
          <Link to="/summarizer" className={home ? "navbar__link-home" : "navbar__link"}>Summarizer</Link>
        </li>
        <li className="navbar__item">
          <Link to="/sentiment-analysis" className={home ? "navbar__link-home" : "navbar__link"}>Sentiment Analyser</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
