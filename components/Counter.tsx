"use client";

import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(1);

  const increment = () => setCount((prev) => prev + 1);

  const decrement = () => {
    if (count > 1) {
      setCount((prev) => prev - 1);
    }
  };

  return (
    <div className="flex items-center bg-gray-100 rounded-lg px-4 py-2 gap-4">
      <button onClick={decrement} className="text-lg">-</button>
      <span className="text-[24px]">{count}</span>
      <button onClick={increment} className="text-lg">+</button>
    </div>
  );
};

export default Counter;
