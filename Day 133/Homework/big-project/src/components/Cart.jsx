import { useContext } from "react"
import { ContextAPI } from "../context/ContextAPI"
import Button2 from "./Button2"

const Cart = () => {
    const { cart, removeFromCart } = useContext(ContextAPI)

    const handleClick = (index) => {
        alert("Payment successful!")
        removeFromCart(index)
    }

    const handleRemove = (index) => {
        removeFromCart(index)
    }

    return (
        <div className="w-full min-h-[85vh] flex justify-center items-center bg-blue-500">
            <div className="w-[40%] min-h-[70%] bg-white rounded-2xl flex flex-col items-center justify-center my-8">
                {cart.length === 0 && <h2>Cart is empty</h2>}

                {cart.map((el, i) => (
                    <div className="w-full min-h-[30%] flex items-center py-5">
                        <div className="w-full min-h-[15%] flex flex-col items-center">
                            <h1 key={i}>
                                {el.title}
                            </h1>
                            <img src={el.image} className="w-[20%] h-full" />
                            <div className="w-[40%] h-[50%] flex justify-between items-center">
                                <Button2 text="Pay" onClick={() => handleClick(i)}/>
                                <p>{el.price}</p>
                                <button className="px-4 py-3 rounded-3xl text-white bg-red-500 transition cursor-pointer" onClick={() => handleRemove(i)}>Remove</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Cart;