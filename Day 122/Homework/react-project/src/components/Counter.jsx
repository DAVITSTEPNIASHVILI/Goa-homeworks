import { useState } from "react"

const Counter = () => {
    const [count, setCount] = useState(0)
    return (
        <>
            <p>{count}</p>

            <button onClick={() => setCount(count + 1)}>increase</button>
            <button onClick={() => setCount(count - 1)}>decrease</button>
            <button onClick={() => setCount(0)}>reset</button>
        </>
    )
}

export default Counter;