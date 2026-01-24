import AboutBtn from "../components/AboutBtn"

const About = () => {
    return (
        <div className="w-full h-screen ">
            <div className="w-full h-[50%] flex justify-center items-center flex-col gap-7">
                <h1>The is about page</h1>

                <AboutBtn />
            </div>
        </div>
    )
}

export default About