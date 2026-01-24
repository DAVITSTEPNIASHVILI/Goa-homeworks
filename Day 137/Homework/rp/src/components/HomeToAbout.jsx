import { useNavigate } from "react-router"

const HomeToAboutBtn = () => {
    const navigate = useNavigate()

    return (
        <button className="px-2 py-4 bg-amber-300" onClick={() => navigate("/About")}>
            Click to go to About page
        </button>
    )
}

export default HomeToAboutBtn