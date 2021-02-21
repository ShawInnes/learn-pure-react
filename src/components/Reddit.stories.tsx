import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Reddit, RedditProps } from './Reddit';

export default {
  title: 'Reddit',
  component: Reddit,
} as Meta;

const RedditTemplate: Story<RedditProps> = (args) => <Reddit {...args} />;
export const reddit = RedditTemplate.bind({});
reddit.args = {
  subreddit: 'reactjs',
};
