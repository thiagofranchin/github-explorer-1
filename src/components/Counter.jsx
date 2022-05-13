import { useState } from 'react';

export function Counter() {

  const [counter, setCounter] = useState(0);

  const increment = function() {
    setCounter(counter + 1);
  }

  const decrement = function() {
    setCounter(counter - 1);
  }  

  return (
    <>
      <button type="button" onClick={decrement}>- 1</button>
      <div>{counter}</div>
      <button type="button" onClick={increment}>+ 1</button>
    </>
  )
}