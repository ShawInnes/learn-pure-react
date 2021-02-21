import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Avatar, AvatarProps } from './Tweet';

export default {
  title: 'Avatar',
  component: Avatar,
} as Meta;

const AvatarTemplate: Story<AvatarProps> = (args) => <Avatar {...args} />;
export const avatar = AvatarTemplate.bind({});
avatar.args = {
  hash: 'xyz',
};
