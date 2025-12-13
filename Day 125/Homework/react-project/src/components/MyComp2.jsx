import { useState } from "react"

const MyComp2 = () => {
    const [change,setChange] = useState({})

    const handleClick = () => {
        const returnedInfo = JSON.parse(localStorage.getItem("local info"))
        setChange(prev => ({...returnedInfo}))
    }
    return (
        <>
            <button onClick={handleClick}>Click me</button>

            {change.name !== "" && <p>{change.name}</p>}
        </>
    )
}
export default MyComp2;