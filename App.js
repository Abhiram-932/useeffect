import React, { useState } from 'react';
import Counter from './Counter';

export default function App() {
  const [show, setShow] = useState(true);

  return (
    <div>
      <h1>Hello , welcome</h1><br></br>
      <button onClick={() => setShow(!show)}>Show/Hide</button>
      <br />
      <br />
      {show ? <Counter /> : <></>}
    </div>
  );
}
