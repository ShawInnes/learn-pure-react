import React from 'react';
import {Meta, Story} from "@storybook/react";
import {FileList, FileListProps} from "./FileList";
import {Counter, CounterProps} from "./Counter";
import {Reddit, RedditProps} from "./Reddit";

export default {
    title: 'Reddit',
    component: Reddit,
} as Meta;


const RedditTemplate: Story<RedditProps> = (args) => <Reddit {...args} />;
export const reddit = RedditTemplate.bind({});
reddit.args = {
    subreddit: 'reactjs'
};
