import { useState } from "react"

const MyComp1 = () => {
    const [change,setChange] = useState({})

    const handleChange = ({target}) => {
        const {name, value} = target
        setChange(prev => ({
            ...prev,
            [name]:value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        localStorage.setItem("local info",JSON.stringify(change))
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} placeholder="Enter Name" name="name"/><br /><br />

                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default MyComp1;