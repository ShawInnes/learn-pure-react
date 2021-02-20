import React from 'react';
import {Meta, Story} from "@storybook/react";
import {FileList, FileListProps} from "./FileList";

export default {
    title: 'FileList',
    component: FileList,
} as Meta;


const Template: Story<FileListProps> = (args) => <FileList {...args} />;
export const fileList = Template.bind({});
fileList.args = {
    files: [{
        id: 1,
        name: 'src',
        type: 'folder',
        updated_at: new Date("2020-07-11 21:24:00"),
        latestCommit: {
            message: 'Initial commit'
        }
    }, {
        id: 2,
        name: 'tests',
        type: 'folder',
        updated_at: new Date("2020-01-11 21:24:00"),
        latestCommit: {
            message: 'Initial commit'
        }
    }, {
        id: 3,
        name: 'README',
        type: 'file',
        updated_at: new Date("2021-02-18 21:24:00"),
        latestCommit: {
            message: 'Added a readme'
        }
    }]
};
