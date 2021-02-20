import React from 'react';
import {Meta, Story} from "@storybook/react";
import {FileList, FileListProps} from "./FileList";
import {Counter, CounterProps} from "./Counter";

export default {
    title: 'Counter',
    component: Counter,
} as Meta;


const CounterTemplate: Story<CounterProps> = (args) => <Counter {...args} />;
export const counter = CounterTemplate.bind({});
counter.args = {
};

const Container: Story = () => (<div>
    <Counter />
    <Counter />
    <Counter />
</div>);
export const counters = Container.bind({});
counters.args = {
};
