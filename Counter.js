import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Abhi');

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  // componentDidMount
  useEffect(() => {
    console.log('componentDidMount !!!');
    return () => {
      console.log('componentWillUnmount !!!');
    };
  }, []);

  // componentDidUpdate
  useEffect(() => {
    console.log('componentDidUpdate for all state !!!');
  });

  // componentDidUpdate for count
  useEffect(() => {
    console.log('componentDidUpdate for count !!!');
  }, [count]);

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={({ target: { value } }) => setName(value)}
      />
      <p>Counter - {count}</p>
      <button onClick={increment}>Increment</button> ---To Raise counter Value<br></br> 
      <button onClick={decrement}>Decrement</button> --To Drop counter Value<br></br> 
      <button onClick={reset}>Reset</button> -------To make counter value zero
    </div>
  );
}

export default Counter;
