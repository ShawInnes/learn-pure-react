import React, {createContext, FC, useContext, useEffect} from 'react';
import './Tweet.css';
import './Avatar.css';
import './Author.css';
import './Time.css';
import './Buttons.css';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faBahai, faEllipsisH, faHeart, faReply, faRetweet,
} from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';
import {Message} from './Message';

export const UserContext = createContext('');

export interface TweetModel {
  message: string;
  gravatar: string;
  author: AuthorProps;
  likes: number;
  retweets: number;
  timestamp: Date;
}

export interface TweetProps {
  tweet: TweetModel;
}

export const Tweet: FC<TweetProps> = ({tweet}) => {
  const user = useContext(UserContext);

  useEffect(() => {
    console.log('userContext', user);
  }, [user]);

  return (
    <div className="tweet">
      <Avatar hash={tweet.gravatar}/>
      <div className="content">
        <Author {...tweet.author} />
        {' '}
        <Time time={tweet.timestamp}/>
        <div><Message message={tweet.message}/></div>
        <div>
          User Context:
          <Message message={user}/>
        </div>
        <Buttons/>
      </div>
    </div>
  );
};

export interface AvatarProps {
  hash: string;
}

export const Avatar: FC<AvatarProps> = ({hash}) => {
  const url = `https://www.gravatar.com/avatar/${hash}`;
  return (
    <img
      src={url}
      className="avatar"
      alt="avatar"
    />
  );
};

export interface AuthorProps {
  name: string;
  handle: string;
}

export const Author: FC<AuthorProps> = ({name, handle}) => (
  <span className="author">
    <span className="name">{name}</span>
    {' '}
    <span className="handle">
      @
      {handle}
    </span>
  </span>
);

export interface TimeProps {
  time: Date;
}

export const Time: FC<TimeProps> = ({time}) => {
  const timeString = moment(time).fromNow();
  return (
    <span className="time">{timeString}</span>
  );
};

export interface ButtonProps {
  onClick?: (e: any) => void;
}

export const ReplyButton: FC<ButtonProps> = ({onClick}) => (
  <button onClick={onClick} className="reply-button"><FontAwesomeIcon icon={faReply}/></button>
);

export const RetweetButton: FC<ButtonProps> = ({onClick}) => (
  <button onClick={onClick} className="retweet-button"><FontAwesomeIcon icon={faRetweet}/></button>
);

export const LikeButton: FC<ButtonProps> = ({onClick}) => (
  <button onClick={onClick} className="like-button"><FontAwesomeIcon icon={faHeart}/></button>
);

export const MoreOptionsButton: FC<ButtonProps> = ({onClick}) => (
  <button onClick={onClick} className="more-options-button"><FontAwesomeIcon icon={faEllipsisH}/></button>
);

export const Buttons: FC = () => (
  <div className="buttons">
    <ReplyButton/>
    <RetweetButton/>
    <LikeButton/>
    <MoreOptionsButton/>
  </div>
);

export interface IconButtonProps {
}

export const IconButton: FC<IconButtonProps> = ({children}) => {
  const items = React.Children.toArray(children);
  console.log(items);
  return (
    <button>
      <FontAwesomeIcon icon={faBahai}/>
      {children}
    </button>
  );
};
