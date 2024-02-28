import { useState } from "react";
import { Counter } from "./Counter"

export default function App() {
    const [isKyle, setIsKyle] = useState(true)

    return (
        <div>
            {isKyle ? <Counter name="Kyle" /> : <Counter name="Sally" />}
            <br />
            <button onClick={() => setIsKyle(k => !k)}>Swap</button>
        </div>
    )
}
