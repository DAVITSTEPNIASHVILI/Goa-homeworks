import { useState } from "react"

const States = () => {
    const [name, setName] = useState("David")
    const [surname, setSurname] = useState("Stepniashvili")
    const [academy,setAcademy] = useState("GOA")

    return (
        <div>
            <p>{name}</p>
            <p>{surname}</p>
            <p>{academy}</p>
        </div>
    )
}

export default States;