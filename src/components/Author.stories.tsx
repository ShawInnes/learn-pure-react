import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Author, AuthorProps } from './Tweet';

export default {
  title: 'Author',
  component: Author,
} as Meta;

const Template: Story<AuthorProps> = (args) => <Author {...args} />;
export const author = Template.bind({});
author.args = {
  name: 'Shaw Innes',
  handle: 'ShawInnes',
};
