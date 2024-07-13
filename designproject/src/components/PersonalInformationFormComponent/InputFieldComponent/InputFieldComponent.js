import React from 'react';
import './InputFieldComponent.css';

const InputFieldComponent = ({ label, name, type = 'text', value, placeholder, icon }) => {
  return (
    <div className="input-field">
      <label htmlFor={name} >{label}</label>
      <div className="input-wrapper">
        {icon && <span className="input-icon">{icon}</span>}
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default InputFieldComponent;