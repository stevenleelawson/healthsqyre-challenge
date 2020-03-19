import React from 'react';
import './styles.css';

const Card = (props) => {
  console.log('cardprops', props)
  return (
    <div className="card">
      <h5>{props.name}</h5>
      <div
        dangerouslySetInnerHTML={{ __html: props.description }}
        className="description"
      >
      </div>
    </div>
  );
};

export default Card;