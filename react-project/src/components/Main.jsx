import bannerImg from "../photos/banner.png"

const Main = () => {
    return (
        <div className="w-full h-[85vh] flex">
            <div className="w-[50%] h-full flex flex-col justify-end items-center">
                <div className="w-[80%] h-[90%] ">
                    <h1 className="text-6xl">
                        <span className="font-black">Boost Your</span>
                        <br />Startup Business <br /> Faster
                    </h1> <br />
                    <p className="pt-3">Pharetra blandit augue volutpat libero augue semper, Non diam neque<br />
                        Sem SenectuS a urna. TOttOt pellentesque ipsum<br />
                        tincidunt enim
                    </p> <br /><br /><br /><br />
                    <p className="p-4 linear-gr w-[20%] flex justify-center items-center rounded-2xl border-white border shadow text-white">
                        <h1>Get Started</h1>
                    </p>
                </div>
            </div>
            <div className="w-[50%] h-full">
                <img src={bannerImg} className="w-[80%] flex justify-start items-start" />
            </div>
        </div>
    )
}

export default Main