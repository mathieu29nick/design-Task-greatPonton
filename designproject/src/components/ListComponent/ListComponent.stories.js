import React from 'react';
import ListComponent from './ListComponent';

export default {
  title: 'Components/ListComponent',
  component: ListComponent,
};

const Template = (args) => <ListComponent {...args} />;

export const Default = Template.bind({});
Default.args= {
    leftLogo : "star.png",
    libelle : "Software Engineer"
 }