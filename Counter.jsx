import { useState, useEffect } from "react";

export function Counter({ name }) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>{name}</div>
      <button onClick={() => setCount((c) => c - 1)}>-</button>
      {count}
      <button onClick={() => setCount((c) => c + 1)}>+</button>
    </div>
  );
}

// function useLocalStorage(key, defaultValue) {}
