import React from 'react';
import PersonalInformationFormComponent from './PersonalInformationFormComponent';

export default {
  title: 'Components/PersonalInformationForm',
  component: PersonalInformationFormComponent,
};

const Template = (args) => <PersonalInformationFormComponent {...args} />;

export const Default = Template.bind({});
Default.args = {};