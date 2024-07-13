import React from 'react';
import InputFieldComponent from './InputFieldComponent';

export default {
  title: 'Components/PersonalInformationForm',
  component: InputFieldComponent,
};

const Template = (args) => <InputFieldComponent {...args} />;

export const InputField = Template.bind({});
InputField.args = {
    label:"First Name",
    name:"first-name",
    value:"Petter",
    icon:<img src="/img/Subtract.png" alt="Check Icon" className="icon" />
};