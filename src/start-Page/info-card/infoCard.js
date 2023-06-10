import React from 'react';
import './infoCard.css';

const InfoCard = ({Logo, Header, Description}) => {
  return (
    <div className="info-card">
      <img src={Logo} alt="Logo" className="logo" />
      <div className="content">
        <div className="header">{Header}</div>
        <div className="description">{Description}</div>
      </div>
    </div>
  );
};

export default InfoCard;
