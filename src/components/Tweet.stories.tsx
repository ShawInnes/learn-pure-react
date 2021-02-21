import React from 'react';
import {Meta, Story} from '@storybook/react';
import {Tweet, TweetProps, UserContext} from './Tweet';

export default {
  title: 'Tweet',
  component: Tweet,
} as Meta;

const TweetTemplate: Story<TweetProps> = (args) => (
    <UserContext.Provider value="Shaw">
      <Tweet {...args} />
    </UserContext.Provider>
);

export const tweet = TweetTemplate.bind({});
tweet.args = {
  tweet: {
    message: 'Something about cats.',
    gravatar: 'xyz',
    author: {
      handle: 'catperson',
      name: 'IAMA Cat Person',
    },
    likes: 2,
    retweets: 0,
    timestamp: new Date('2016-07-30 21:24:37'),
  },
};
