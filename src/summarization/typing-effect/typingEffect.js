import React, { useState, useEffect } from 'react';

const TypingEffect = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const typingTimer = setTimeout(() => {
      setDisplayText((prevText) => prevText + text[currentIndex]);
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 100);

    if (currentIndex === text.length) {
      clearTimeout(typingTimer);
    }

    return () => {
      clearTimeout(typingTimer);
    };
  }, [currentIndex, text]);

  return <div>{displayText}</div>;
};

export default TypingEffect;
