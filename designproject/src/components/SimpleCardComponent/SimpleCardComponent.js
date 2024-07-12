import React from 'react';
import './SimpleCardComponent.css';

const SimpleCardComponent = ({title,description,link}) => {
  return (
    <div className="simple-card-component">
      <h2 className="sp-title">{title}</h2>
      <p className="sp-description">
        {description}
      </p>
      <a href="#" className="sp-link">{link}</a>
    </div>
  );
};

export default SimpleCardComponent;
