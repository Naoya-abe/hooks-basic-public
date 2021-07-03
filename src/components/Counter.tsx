import React, { useState } from 'react';

function initializeCounter() {
  for (let i = 0; i < 20000; i++) {
    console.log(i);
  }
  return 0;
}

const Counter: React.VFC = () => {
  const [count, setCount] = useState(() => {
    const initialValue = initializeCounter();
    return initialValue;
  });
  return (
    <button
      onClick={() => {
        setCount((prevCount) => prevCount + 1);
        setCount((prevCount) => prevCount + 1);
      }}
    >
      {count}
    </button>
  );
};

export default Counter;
