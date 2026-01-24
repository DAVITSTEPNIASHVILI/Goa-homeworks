import HomeBtn from "../components/HomeBtn"
import HomeToAboutBtn from "../components/HomeToAbout"

const Home = () => {
    return (
        <div className="w-full h-screen ">
            <div className="w-full h-[50%] flex justify-center items-center flex-col gap-7">
                <h1>The is home page</h1>

                <HomeBtn />
                <HomeToAboutBtn />
            </div>
        </div>
    )
}

export default Home