import React, { FC } from 'react';
import './Tweet.css';
import './Avatar.css';
import './Message.css';
import './Author.css';
import './Time.css';
import './Buttons.css';

export interface MessageProps {
    message: string;
}

export const Message: FC<MessageProps> = ({ message }) => (
  <span className="message">
    {message}
  </span>
);
