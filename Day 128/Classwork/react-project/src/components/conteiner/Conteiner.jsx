import { useState } from "react"
import Presentational from "../presentational/Presentational"

const Conteiner = () => {
    const [count, setCount] = useState(0)

    const decrease = () => {
        setCount(prev => prev - 1)
    }

    return (
        <>
            <Presentational count={count} decrease={decrease} />
        </>
    )
}

export default Conteiner