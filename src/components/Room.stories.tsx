import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Room, RoomStore } from './Room';

export default {
  title: 'RoomStore',
  component: RoomStore,
} as Meta;

const RoomStoreTemplate: Story = (args) => (<RoomStore><Room /></RoomStore>);
export const roomStore = RoomStoreTemplate.bind({});
roomStore.args = {
};
