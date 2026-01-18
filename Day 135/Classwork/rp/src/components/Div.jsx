import img from "../assests/image.png";

const Div = () => {
    return (
        <div className="w-full h-screen flex justify-center items-center">
            <div className="w-[20%] h-[30%] flex flex-col bg-[#d1e9fc] rounded-[5px]">
                <div className="w-full h-[50%] flex justify-center items-center">
                    <div className="w-[20%] h-[40%] rounded-[50%] bg-[#b2cfed] flex justify-center items-center">
                        <img src={img}  />
                    </div>
                </div>
                <div className="w-full h-[50%] flex justify-center items-center flex-col">
                    <h1>714K</h1>
                    <p>Weekly Sales</p>
                </div>
            </div>
        </div>
    )
}

export default Div