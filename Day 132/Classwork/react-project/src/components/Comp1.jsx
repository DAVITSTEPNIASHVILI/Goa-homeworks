import { useContext } from "react"
import { MyContext } from "../context/MyContext"

const Comp1 = () => {
    const nameUser = useContext(MyContext)
    return (
        <p>{nameUser}</p>
    )
}

export default Comp1;