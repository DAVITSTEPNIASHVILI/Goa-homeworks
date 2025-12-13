import { useEffect, useState } from "react"

const MyComp = () => {
    const [count,setCount] = useState(0)

    useEffect(() => {
        alert(count)
    })
    return (
        <>
            <button onClick={() => setCount(prev => prev + 1)}>+1</button>
        </>
    )
}

export default MyComp;