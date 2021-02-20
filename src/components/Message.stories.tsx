import React from 'react';
import {Meta, Story} from "@storybook/react";
import {Message, MessageProps} from "./Message";

export default {
    title: 'Message',
    component: Message,
} as Meta;


const MessageTemplate: Story<MessageProps> = (args) => <Message {...args} />;
export const message = MessageTemplate.bind({});
message.args = {
  message: "Something about cats."
};
