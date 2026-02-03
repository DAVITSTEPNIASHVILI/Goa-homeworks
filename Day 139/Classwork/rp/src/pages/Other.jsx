import { useNavigate } from "react-router"
import Button from "../components/Button"


const Other = () => {
    const navigate = useNavigate()
    
    const handleClick = () => {
        navigate("/")
    }

    return (
        <>
            <p>Hello this is Other page!</p>

            <Button text="Click to go Home page" bgColor="blue" onClick={handleClick} />
        </>
    )
}

export default Other