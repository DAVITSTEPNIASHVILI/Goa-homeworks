import { useContext } from "react"
import { CountContext } from "../context/CountContext"

const MyComp = () => {
    const {count, setCount} = useContext(CountContext)

    return (
        <>
            <p>{count}</p>
            <button onClick={() => setCount(prev => prev + 1)}>increase</button>
        </>
    )
}

export default MyComp;