import React from 'react';
import './styles.css';

const Card = ({ name, price, vendor, description }) => {
  return (
    <div className="card">
      <h5>{name}</h5>
      <div className="sub-header">
        <p>${price}</p>
        <p>&nbsp;{`from ${vendor}`}</p>
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: description }}
        className="description"
      >
      </div>
    </div>
  );
};

export default Card;