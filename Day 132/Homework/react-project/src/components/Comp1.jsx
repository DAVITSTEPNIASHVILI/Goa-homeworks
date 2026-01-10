import { useContext } from "react"
import { StudentsContext } from "../context/StudentsContext"

const Comp1 = () => {
    const values = useContext(StudentsContext)
    return (
        values.map(el => {
            return <p>{el}</p>
        })
    )
}

export default Comp1