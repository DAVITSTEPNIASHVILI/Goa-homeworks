import { useNavigate } from "react-router"

const ProfileBtn = () => {
    const navigate = useNavigate()

    return (
        <button className="px-2 py-4 bg-red-300" onClick={() => navigate("/")}>
            Click to go to Home page
        </button>
    )
}

export default ProfileBtn