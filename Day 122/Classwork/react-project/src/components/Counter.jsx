import { useState } from "react"

const Counter = () => {
    const [count, setcount] = useState(0)

    return (
        <>
            <p>{count}</p>
            <button onClick={() => setcount(count - 1)}>decrease</button>
        </>
    );
}

export default Counter;