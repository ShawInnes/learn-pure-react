import React from 'react';
import { Meta, Story } from '@storybook/react';
import {Buttons} from "./Tweet";

export default {
  title: 'Buttons',
  component: Buttons,
} as Meta;

const TweetTemplate: Story = (args) => <Buttons {...args} />;
export const buttons = TweetTemplate.bind({});
buttons.args = {

};
