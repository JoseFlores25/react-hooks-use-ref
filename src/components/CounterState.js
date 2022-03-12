import React, { useRef, useState } from "react";

function CounterState() {
  const [count, setCount] = useState(0);
  let regularCount = 0;
  const countRef = useRef(0);

  function handleClick() {
    setCount((count) => count + 1);
  }

  function handleRegularClick() {
    regularCount += 1;
    console.log({ regularCount });
  }

  function handleRefClick() {
    countRef.current += 1;
    console.log({ countRef });
  }

  console.log({ count, regularCount, countRef });

  return (
    <div>
      <h1>CounterState</h1>
      <button onClick={handleClick}>{count}</button>
      <button onClick={handleRegularClick}>{regularCount}</button>
      <button onClick={handleRefClick}>{countRef.current}</button>
    </div>
  );
}

export default CounterState;
