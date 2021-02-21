import React, { FC, useState } from 'react';
import './Avatar.css';
import './Message.css';
import './Author.css';
import './Time.css';
import './Buttons.css';

export interface CounterProps {

}

export const Counter: FC<CounterProps> = () => {
  const [actionCount, setActionCount] = useState(0);

  const handleAction = () => {
    setActionCount((prevState) => prevState + 1);
  };

  const handleReset = () => {
    setActionCount(0);
  };

  return (
    <div>
      <CounterChild onAction={handleAction} />
      <ResetChild onAction={handleReset} />
      <p>
        Clicked
        {actionCount}
        {' '}
        times
      </p>
    </div>
  );
};

export interface CounterChildProps {
    onAction: (e: any) => void;
}

export const CounterChild: FC<CounterChildProps> = ({ onAction }) => (
  <button onClick={onAction}>
    Click Me!
  </button>
);

export interface ResetChildProps {
    onAction: (e: any) => void;
}

export const ResetChild: FC<ResetChildProps> = ({ onAction }) => (
  <button onClick={onAction}>
    Reset
  </button>
);
