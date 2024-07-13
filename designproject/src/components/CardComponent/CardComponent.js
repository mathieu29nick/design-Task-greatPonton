import React from 'react';
import ListComponent from '../ListComponent/ListComponent';
import './CardComponent.css';

const CardComponent = ({ icon,libelle,rightIcon,boards,widthImage = 16,heightImage = 16 }) => {
  return (
    <div className="card-component">
      <div className="card-header">
        <div className="card-icon-title">
          <img src={process.env.PUBLIC_URL + "/img/"+icon} height={heightImage} width={widthImage} alt="" className="card-icon" />
          <span className="card-title">{libelle}</span>
        </div>
        {rightIcon ? (
            <button className="card-add-button">
                <img src={process.env.PUBLIC_URL + "/img/"+rightIcon} alt="" className="card-icon" />
            </button>
        ) : null}  
      </div>
      {boards.map((board, index) => (
        <ListComponent key={index} leftLogo={board.leftLogo} libelle={board.libelle} />
      ))}
    </div>
  );
};

export default CardComponent;
