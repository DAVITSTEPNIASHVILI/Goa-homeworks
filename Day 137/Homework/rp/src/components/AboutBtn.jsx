import { useNavigate } from "react-router"

const AboutBtn = () => {
    const navigate = useNavigate()

    return (
        <button className="px-2 py-4 bg-blue-300" onClick={() => navigate("/")}>
            Click to go to Home page
        </button>
    )
}

export default AboutBtn