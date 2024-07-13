import React from 'react';
import './FooterComponent.css';

const FooterComponent = ({tab}) => {
  return (
    <footer className="footer">
      <ul className="footer-links">
        {tab.map((item, index) => (
            <li key={index}><a href="#">{item.libelle}</a></li>
        ))}
      </ul>
    </footer>
  );
};

export default FooterComponent;
