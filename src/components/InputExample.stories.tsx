import React from 'react';
import { Meta, Story } from '@storybook/react';
import { InputExample, InputExampleProps } from './InputExample';

export default {
  title: 'InputExample',
  component: InputExample,
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const InputExampleTemplate: Story<InputExampleProps> = (args) => <InputExample {...args} />;
export const inputExample = InputExampleTemplate.bind({});
inputExample.args = {
};
