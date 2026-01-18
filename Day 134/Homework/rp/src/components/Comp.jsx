import { useEffect, useState } from "react";

const Comp = () => {
    const [count, setCount] = useState(0)
    
    const increase = () => setCount(prev => prev + 1)

    const reset = () => setCount(0)

    const decrease = () => setCount(prev => prev - 1)

    useEffect(() => {
        setCount(increase)
    }, [count])

    return (
        <div>
            <p>{count}</p>
            <button onClick={increase}>Increase</button>
            <button onClick={reset}>Reset</button>
            <button onClick={decrease}>Decrease</button>
        </div>
    )
}

export default Comp;