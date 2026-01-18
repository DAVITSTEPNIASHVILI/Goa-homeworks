import { createContext, useEffect, useState } from "react";

export const ContextAPI = createContext()

export const ApiProvider = ({children}) => {
    const [forApi, setForApi] = useState([])
    const [cart, setCart] = useState([])

    const asyncFunc = async (apiLink) => {
        try {
            const awaitApi = await fetch(apiLink)
            const resApi = await awaitApi.json()
            setForApi(resApi)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        asyncFunc("https://fakestoreapi.com/products")
    }, [])
    

    const addToCart = (product) => {
        setCart(prev => [...prev, product])
    }

    const removeFromCart = (index) => {
        setCart(prev => prev.filter((_, i) => i !== index))
    } 

    return (
        <ContextAPI.Provider value={{forApi, cart, addToCart, removeFromCart}}>
            {children}
        </ContextAPI.Provider>
    )
}