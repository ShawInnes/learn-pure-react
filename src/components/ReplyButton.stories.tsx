import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ReplyButton, ButtonProps } from './Tweet';

export default {
  title: 'ReplyButton',
  component: ReplyButton,
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const ReplyButtonTemplate: Story<ButtonProps> = (args) => <ReplyButton {...args} />;
export const replyButton = ReplyButtonTemplate.bind({});
replyButton.args = {

};
