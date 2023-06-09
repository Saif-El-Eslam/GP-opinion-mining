import React from 'react';
import ReactWordcloud from 'react-wordcloud';
import './wordCloud.css'; // Import CSS file for styling

const WordCloud = ({ words }) => {
  // Define custom options for the word cloud
  const options = {
    colors: ['#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd'], // Define custom colors
    rotations: 3, // Number of times a word should rotate
    rotationAngles: [-90, 0], // Define rotation angles
    fontSizes: [12, 36], // Define font size range
    deterministic: true, // Enable deterministic rendering
  };

  return (
    <div className="word-cloud">
      <ReactWordcloud words={words} options={options} />
    </div>
  );
};

export default WordCloud;
