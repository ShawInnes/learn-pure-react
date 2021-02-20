import React from 'react';
import {
    Avatar,
    Tweet,
    Author,
    Buttons,
    AuthorProps,
    TweetModel,
    TweetProps,
    IconButton,
    IconButtonProps
} from "./Tweet";
import {Meta, Story} from "@storybook/react";

export default {
    title: 'IconButton',
    component: IconButton,
} as Meta;


const Template: Story<IconButtonProps> = (args) => <IconButton {...args} ><em>This is the Text</em></IconButton>;
export const tweet = Template.bind({});
tweet.args = {
};
