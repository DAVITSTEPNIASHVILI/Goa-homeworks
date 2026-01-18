import logoImg from "../assests/image.png"
import Button from "./Button"
import { useNavigate } from "react-router-dom"


const NavBar = () => {
    const navigate = useNavigate()
    return (
        <div className="w-full h-20vh flex justify-center items-center bg-black">
            <div className="w-[80%] h-full flex justify-between items-center">
                <img src={logoImg} alt="Logo Image" className="w-[20%]"/>
                <div className="w-[40%] flex justify-around items-center">
                    <Button text="Shop" onClick={() => navigate("/main")} />
                    <Button text="Cart" onClick={() => navigate("/cart")}/>
                    <Button text="Log In" onClick={() => navigate("/login")} />
                    <Button text="Sign Up" onClick={() => navigate("/signup")} />
                </div>
            </div>
        </div>
    )
}

export default NavBar