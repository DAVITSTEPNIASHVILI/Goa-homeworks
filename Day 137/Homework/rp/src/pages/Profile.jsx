import ProfileBtn from "../components/ProfileBtn"

const Profile = () => {
    return (
        <div className="w-full h-screen ">
            <div className="w-full h-[50%] flex justify-center items-center flex-col gap-7">
                <h1>The is profile page</h1>

                <ProfileBtn />
            </div>
        </div>
    )
}

export default Profile