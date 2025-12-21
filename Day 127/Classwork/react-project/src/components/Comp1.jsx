import { useEffect, useState } from "react"

const Comp1 = () => {
    const [data, setData] = useState([])

    const asyncFunc = async (apiLink) => {
        const api = await fetch(apiLink)
        const res = await api.json()
        setData(res)
    }

    useEffect(() => {
        asyncFunc('https://jsonplaceholder.typicode.com/todos/1')
        console.log(data)
    }, [])

    useEffect(() => {
        console.log(data)
    }, [data])

    return (
        <>
            <div></div>
        </>
    )
}

export default Comp1;