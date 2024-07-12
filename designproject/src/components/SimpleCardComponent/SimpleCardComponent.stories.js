import React from 'react';
import SimpleCardComponent from './SimpleCardComponent';

export default {
  title: 'Components/SimpleCardComponent',
  component: SimpleCardComponent,
};

const Template = (args) => <SimpleCardComponent {...args} />;

export const Default = Template.bind({});
Default.args= {
    title : "Delete account",
    description : "If you delete your account you’ll be permanently removing it from our systems - you can’t undo it.",
    link : "Yes, Delete my account"
 }