import React from 'react';
import PremiumAccount from './PremiumAccount';

export default {
  title: 'Components/PremiumAccount',
  component: PremiumAccount,
};

const Template = (args) => <PremiumAccount {...args} />;

export const PremiumAccountComponent = Template.bind({});
PremiumAccountComponent.args = {
  title:'Premium Account',
  description:'You have a premium account, granting you access to all the remarkable features offered by ResumeDone. With this privilege, you can indulge in the freedom of downloading an unlimited number of resumes and cover letters in both PDF and Word formats.'
};