import { useState } from "react"
import { useNavigate } from "react-router"
const Home = () => {
    const [count, setCount] = useState(0)

    const navigate = useNavigate()

    if (count === 3) {
        navigate("/info")
    }

    return (
        <>
        <p>Home Page</p>

        <p>{count}</p>

        <button onClick={() => setCount(prev => prev + 1)}>+1</button>
        </>
    )
}

export default Home