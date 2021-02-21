import React, { FC } from 'react';
import './Avatar.css';
import './Message.css';
import './Author.css';
import './Time.css';
import './Buttons.css';

import { Time } from './Tweet';

export interface FileModel {
    id: number;
    name: string;
    type: string;
    updated_at: Date;
    latestCommit: {
        message: string
    }
}

export interface FileListProps {
    files: FileModel[];
}

export const FileList: FC<FileListProps> = ({ files }) => (
  <table className="file-list">
    <tbody>
      {files.map((file) => (
        <tr className="file-list-item" key={file.id}>
          <td className="file-name">{file.name}</td>
          <td>{file.latestCommit.message}</td>
          <td><Time time={file.updated_at} /></td>
        </tr>
      ))}
    </tbody>
  </table>
);
