import { useEffect, useState } from "react"

const Comp1 = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        setCount(count + 1)
    }, [])
    return (
        <form onSubmit={handleSubmit}>
            <p>{count}</p>

            <button type="submit">Submit</button>
        </form>
    )
}

export default Comp1;