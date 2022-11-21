import { Meta, Story } from "@storybook/react";
import React from "react";

import { Button, ButtonProps } from "./Button";
import { Icon, IconProps } from "./Icon";

export default {
  title: "Atoms/Button",
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args}>a</Button>;

export const Primary = Template.bind({});
Primary.args = {
  mode: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  mode: "secondary",
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  mode: "tertiary",
};

export const AsLink: Story<ButtonProps> = () => (
  <Button href="https://github.com/llorenscm/aeiou" mode="primary">
    a
  </Button>
);
export const ButtonIcon: Story<IconProps> = () => (
  <Button mode="primary" label="home">
    <Icon icon="home" />
  </Button>
);
