import { useEffect, useState } from "react"

const Comp = () => {
    const [count, setCount] = useState(0)

    
    useEffect(() => {
        console.log(count)
    }, [count])

    const handleClick = () => {
        setCount(prev => prev + 1)
    }

    return (
        <div>
            <p>{count}</p>
            <button onClick={handleClick}>Increase</button>
        </div>
    )
}
export default Comp;