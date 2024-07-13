import React from 'react';
import FooterComponent from './FooterComponent';

export default {
  title: 'Components/FooterComponent',
  component: FooterComponent,
};

const Template = (args) => <FooterComponent {...args} />;

export const Default = Template.bind({});
const list = [
    { libelle: "Terms & Conditions" },
    { libelle: "Privacy Policy" },
    { libelle: "FAQ" },
    { libelle: "Contact Us" }
];

Default.args= {
    tab : list
}