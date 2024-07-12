import React from 'react';
import CardComponent from './CardComponent';

export default {
  title: 'Components/CardComponent',
  component: CardComponent,
};

const Template = (args) => <CardComponent {...args} />;

export const Default = Template.bind({});
const list = [
    { leftLogo: "folder.png", libelle: "Board 1" },
    { leftLogo: "folder.png", libelle: "Board 2" },
    { leftLogo: "folder.png", libelle: "Board 3" },
    { leftLogo: "key.png", libelle: "Board agent 1" },
    { leftLogo: "key.png", libelle: "Board agent 2" },
    { leftLogo: "key.png", libelle: "Board agent 3" }
];

Default.args= {
    icon : "board.png",
    libelle : "My boards",
    boards : list,
    rightIcon : "add.png"
}