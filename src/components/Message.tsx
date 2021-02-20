import React, {FC} from 'react';
import './Tweet.css';
import './Avatar.css';
import './Message.css';
import './Author.css';
import './Time.css';
import './Buttons.css';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBahai, faEllipsisH, faHeart, faReply, faRetweet} from "@fortawesome/free-solid-svg-icons";
import moment from "moment";


export interface MessageProps {
    message: string;
}

export const Message: FC<MessageProps> = ({message}) => (
    <span className="message">
        {message}
    </span>
);
