import React from "react";
import InputFieldComponent from "./InputFieldComponent/InputFieldComponent";
import "./PersonalInformationFormComponent.css";

const PersonalInformationFormComponent = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const checkIcon = (
    <img src="/img/Subtract.png" alt="Check Icon" className="icon" />
  );

  return (
    <div className="personal-information-container">
      <h3>Personal Information</h3>
      <div className="form-container">
        <form className="personal-information" onSubmit={handleSubmit}>
          <div className="form-grid">
            <InputFieldComponent
              label="First Name"
              name="firstName"
              value="Petter"
              placeholder="First Name"
            />
            <InputFieldComponent
              label="Last Name"
              name="lastName"
              value="Cetera"
              placeholder="Last Name"
            />
            <InputFieldComponent
              label="City"
              name="city"
              value="London"
              placeholder="City"
            />
            <InputFieldComponent
              label="Postal Code"
              name="postalCode"
              value="E2 4XF"
              placeholder="Postal Code"
            />
          </div>
          <InputFieldComponent
            label="Address"
            name="address"
            value="123 Example"
            placeholder="Address"
          />

          <div className="form-grid">
            <InputFieldComponent
              label="Email"
              name="email"
              type="email"
              value="petter@gmail.com"
              placeholder="Email"
              icon={checkIcon}
            />
            <InputFieldComponent
              label="Phone"
              name="phone"
              type="tel"
              value="+442223334444"
              placeholder="Phone"
            />
            <InputFieldComponent
              label="Password"
              name="password"
              value="Password"
              placeholder="Password"
            />
          </div>
          <p className="personal-information__text">Use this email to log in to your <span className="personal-information__text__link"> resumedone.io </span> account and receive notifications.</p>
          <button type="submit">Save</button>
        </form>
        <div className="profile-image-container">
          <img src="/img/profile.png" alt="Profile" className="profile-image" />
        </div>
      </div>
    </div>
  );
};

export default PersonalInformationFormComponent;
