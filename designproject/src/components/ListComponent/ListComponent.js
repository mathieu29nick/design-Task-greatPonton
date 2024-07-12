import React from 'react';
import './ListComponent.css';

const ListComponent = ({ leftLogo, libelle }) => {
  return (
    <div className="list-component">
      <div className="icon-title">
        {leftLogo && <img src={process.env.PUBLIC_URL + "/img/"+ leftLogo} alt="left icon" className="icon left" />}
        <span className="title">{libelle}</span>
      </div>
    </div>
  );
};
export default ListComponent;
