import logoBg from "../photos/image.png"

const NavBar = () => {
    const handleClick = () => {
        window.location.reload()
    }

    return (
        <div className="w-full h-[15vh] flex justify-between">
            <div className="w-[20%] h-full flex justify-center items-center">
                <img src={logoBg} onClick={handleClick}  className="w-18.75"  />
            </div>
            <div className="w-[50%] h-full flex justify-around items-center ml-5">
                <p className="text-red-500">About</p>
                <p>How it works</p>
                <p>Features</p>
                <p>Blog</p>
            </div>
            <div className="w-[20%] h-full flex justify-evenly items-center">
                <p className="border  rounded-xl py-1.25 px-5">Log In</p>
                <p className="bg-black text-white rounded-xl py-1.25 px-5">Sign Up</p>
            </div>
        </div>
    )
}

export default NavBar;