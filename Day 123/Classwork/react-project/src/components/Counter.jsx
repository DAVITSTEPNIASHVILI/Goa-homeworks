import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0)

    const plus2 = () => setCount(count + 2)

    const reset = () => setCount(0)

    const minus2 = () => setCount(prev => prev -2)

    const countTrueOrFalse =  count > 10

    const countTrueOrFalse2 =  count < -10

    return (
        <>
            <p>{count}</p>

            <button onClick={plus2} disabled={countTrueOrFalse}>+2</button>
            <button onClick={reset}>Reset</button>
            <button onClick={minus2} disabled={countTrueOrFalse2}>-2</button>
        </>
    )
}

export default Counter;