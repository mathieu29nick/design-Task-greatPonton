import React from 'react';
import './PremiumAccount.css';

const PremiumAccount = ({ title, description }) => {
  return (
    <div className="premium-account">
        <div className="premium-account__img">
          <img src="/img/premium-account.png" width="70" height="70" alt="premium-account"  />
        </div>
        <div className="premium-account__content">
            <p className="premium-account__content__title">{title}</p>
            <p className="premium-account__content__description">{description}</p>
        </div>
    </div>
  );
}

export default PremiumAccount;