import { useContext } from "react"
import { ContextAPI } from "../context/ContextAPI"
import Button2 from "./Button2"

const Main = () => {
    const { forApi, addToCart } = useContext(ContextAPI)

    if (!forApi.length) return <h1>Loading...</h1>

    return (
        <div className="min-h-[85vh] w-full grid grid-cols-4 grid-rows-3">
            {forApi.map(el => (
                <div key={el.id} className="w-full h-full flex justify-center items-center">
                    <div className="w-[80%] h-[90%] flex flex-col justify-around items-center shadow-2xl rounded-2xl">
                        <img src={el.image} className="w-[90%] h-[30%] rounded-2xl" />
                        <h1>{el.title}</h1>
                        <h2>{el.price}</h2>

                        <Button2 text="Add to cart" onClick={() => addToCart(el)}/>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Main