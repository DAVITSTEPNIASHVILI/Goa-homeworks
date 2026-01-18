import { useState } from "react"

const Div = () => {
    const [count, setCount] = useState(0)

    const increase = () => setCount(prev => prev + 1)

    const reset = () => setCount(0)

    const decrease = () => setCount(prev => prev - 1)
    
    return (
        <div className="w-full h-screen flex justify-center items-center">
            <div className="w-[20%] h-[30%] flex flex-col">
                <div className="w-full h-[50%] flex justify-center items-center">
                    <p>{count}</p>
                </div>
                <div className="w-full h-[50%] flex justify-center items-center gap-[10px]">
                    <button onClick={increase}>Increase</button>
                    <button onClick={reset}>Reset</button>
                    <button onClick={decrease}>Decrease</button>
                </div>
            </div>
        </div>
    )
}

export default Div