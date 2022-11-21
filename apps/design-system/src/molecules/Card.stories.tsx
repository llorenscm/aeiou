import { Meta, Story } from "@storybook/react";
import React from "react";

import { Card, CardProps } from "./Card";

export default {
  title: "Molecules/Card",
  component: Card,
} as Meta;

const Template: Story<CardProps> = (args) => <Card {...args}></Card>;

export const Default = Template.bind({});
Default.args = {
  title: "lletres",
  image: "/letter.png",
  href: "https://github.com/llorenscm/aeiou",
  alt: "lletra a",
};
