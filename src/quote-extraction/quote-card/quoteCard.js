import React, {useState} from 'react';
import './quoteCard.css'; 

const QuoteCard = ({ quote }) => {
  
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);


  return (
    <div className="quote-wrapper" onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
      {hovered && 
      <div className="quote-content-hover">
        Get Sentiment
      </div>}
      <div className="quote-content">
        {quote}
      </div>
    </div>
  );
};

export default QuoteCard;
