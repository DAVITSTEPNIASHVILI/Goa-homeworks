import { useEffect, useState } from "react"

const Comp1 = () => {
    const [userApi, setUserApi] = useState([])
    const [err, setErr] = useState(false)
    const [errMessage, setErrMessage] = useState("")


    const randomColor = () => {
        const colors = [
            "#FF0000",
            "#00FF00",
            "#0000FF",
            "#FFFF00",
            "#00FFFF",
            "#FF00FF",
            "#FFA500",
            "#800080",
            "#FFC0CB",
            "#808080"
        ]

        return colors[Math.floor(Math.random() * colors.length)]
    }

    const asyncFunc = async (apiLink) => {
        try {
            const api = await fetch(apiLink)
            const res = await api.json()
            setUserApi(res)
            setErr(false)
            setErrMessage("")
        } catch (error) {
            setErr(true)
            setErrMessage(error)
        }
    }

    useEffect(() => {
        asyncFunc('https://jsonplaceholder.typicode.com/users')
    }, [])

    if (userApi.length === 0) {
        return <h1>Loading...</h1>
    }

    if (err === true) {
        return <h1>Error: {errMessage}</h1>
    }




    return (
        <ul style={{width: "100%", height: "100vh", display: "flex", flexDirection: "column" , justifyContent: "center", alignItems:"center", color: randomColor()}}>
            {userApi.map((el, i) => {
                return (
                    <li key={i}>
                        <p>Name: {el.name}</p>
                        <i>Email: {el.email}</i>
                    </li>
                )
            })}
        </ul>
    )
}

export default Comp1;