import { useState } from "react";
import { Counter } from "./Counter";

export default function App() {
  const [isKyle, setIsKyle] = useState(true);

  return (
    <div>
      {isKyle ? (
        <Counter name="Kyle" key="Kyle" />
      ) : (
        <Counter name="Sally" key="Sally" />
      )}
      <br />
      <button onClick={() => setIsKyle((k) => !k)}>Swap</button>
    </div>
  );

  // Another way to use key, similar result as the example above (Good use case for a chat app)
//   return (
//     <div>
//         {isKyle ? <div>Kyle's Score</div> : <div>Sally's Score</div>}
//         <input type="number" key={isKyle ? "kyle" : "sally"} />
//         <br />
//         <button onClick={() => setIsKyle(k = !k)}>Swap</button>
//     </div>
//   )
}
