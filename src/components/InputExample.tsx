import React, {
  BaseSyntheticEvent,
  FC,
  useEffect,
  useLayoutEffect, useRef,
  useState,
} from 'react';
import './Tweet.css';
import './Avatar.css';
import './Message.css';
import './Author.css';
import './Time.css';
import './Buttons.css';

export interface InputExampleProps {
    defaultText: string;
}

export const InputExample: FC<InputExampleProps> = () => {
  const [first, setFirst] = useState('Pizza');
  const [last, setLast] = useState('Lover');
  const [topping, setTopping] = useState('H');

  const inputRef = useRef<HTMLInputElement>(null);

  const handleFirstChange = (event: BaseSyntheticEvent) => {
    setFirst(event.target.value);
  };

  const handleLastChange = (event: BaseSyntheticEvent) => {
    setLast(event.target.value);
  };

  const handleToppingChange = (event: BaseSyntheticEvent) => {
    setTopping(event.target.value);
  };

  useEffect(() => {
    console.log('latest value:', first);
  }, [first]);

  useLayoutEffect(() => {
    console.log('render');
    if (inputRef.current !== null) {
      inputRef.current.focus();
    }
  }, [inputRef]);

  useEffect(() => {
    console.log('mounted');
    return () => console.log('unmounting...');
  }, []); // <-- add this empty array here

  return (
    <div>
      <input
        type="text"
        value={first}
        onChange={handleFirstChange}
        ref={inputRef}
      />
      <input
        type="text"
        value={last}
        onChange={handleLastChange}
      />

      <p>Topping</p>
      <select value={topping} onChange={handleToppingChange}>
        <option value="P">Pepperoni</option>
        <option value="H">Hawaiian</option>
      </select>
      <p>{topping}</p>

      <p>
        Hello,
        {first}
        {' '}
        {last}
      </p>

    </div>
  );
};
