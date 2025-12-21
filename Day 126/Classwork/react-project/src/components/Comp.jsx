import { useEffect } from "react"

const Comp = () => {

    useEffect(() => {
        document.addEventListener("mousedown", () => console.log(Date.now()))

        return () => {
            document.removeEventListener("mousedown", () => console.log(Date.now()))
        }
    })

    return (
        <>

        </>
    )
}

export default Comp;