import useCounter from "../hooks/useCounter"

const Counter = () => {
    const [counter, increase, decrease, reset] = useCounter()

    return (
        <div>
            <p>{counter}</p>

            <button onClick={increase}>increase</button>
            <button onClick={decrease}>decrease</button>
            <button onClick={reset}>reset</button>
        </div>
    )
}

export default Counter;