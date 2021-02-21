import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  IconButton,
  IconButtonProps,
} from './Tweet';

export default {
  title: 'IconButton',
  component: IconButton,
} as Meta;

const Template: Story<IconButtonProps> = (args) => (<IconButton {...args}><em>This is the Text</em></IconButton>);
export const tweet = Template.bind({});
tweet.args = {
};
