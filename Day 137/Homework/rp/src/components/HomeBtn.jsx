import { useNavigate } from "react-router"

const HomeBtn = () => {
    const navigate = useNavigate()

    return (
        <button className="px-2 py-4 bg-amber-300" onClick={() => navigate("/profile")}>
            Click to go to Profile page
        </button>
    )
}

export default HomeBtn