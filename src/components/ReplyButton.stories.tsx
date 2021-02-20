import React from 'react';
import {ReplyButton, ButtonProps} from "./Tweet";
import {Meta, Story} from "@storybook/react";

export default {
    title: 'ReplyButton',
    component: ReplyButton,
    argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const ReplyButtonTemplate: Story<ButtonProps> = (args) => <ReplyButton {...args} />;
export const replyButton = ReplyButtonTemplate.bind({});
replyButton.args = {

};
