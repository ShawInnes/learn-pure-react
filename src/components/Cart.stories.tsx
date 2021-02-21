import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Shopper } from './Cart';

export default {
  title: 'Shopper',
  component: Shopper,
} as Meta;

const CartTemplate: Story = (args) => (<Shopper />);
export const cart = CartTemplate.bind({});
cart.args = {
};
