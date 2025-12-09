import { useState } from "react"

const Info = () => {
    const [text, setText] = useState()

    const handleChange = e => {
        setText(e.target.value)
    }

    return (
        <form>
            <p>{text}</p>

            <input type="text" onChange={handleChange}/>
        </form>
    )
}

export default Info;