import { useNavigate } from "react-router"
import Button from "../components/Button"

const Home = () => {
    const navigate = useNavigate()
    
    const handleClick = () => {
        navigate("/other")
    }

    return (
        <>
            <p>Hello this is Home page!</p>

            <Button text="Click to go other page" bgColor="red" onClick={handleClick} />
        </>
    )
}

export default Home