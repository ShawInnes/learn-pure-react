import React from 'react';
import {Avatar, Tweet, Author, Buttons, AuthorProps, TweetModel, TweetProps} from "./Tweet";
import {Meta, Story} from "@storybook/react";

export default {
    title: 'Buttons',
    component: Buttons,
} as Meta;


const TweetTemplate: Story = (args) => <Buttons {...args} />;
export const buttons = TweetTemplate.bind({});
buttons.args = {

};
