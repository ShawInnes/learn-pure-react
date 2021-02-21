import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ValidatedForm, FormProps } from './Form';

export default {
  title: 'Form',
  component: ValidatedForm,
} as Meta;

const Template: Story<FormProps> = (args) => <ValidatedForm {...args} />;
export const formikForm = Template.bind({});
formikForm.args = {};
