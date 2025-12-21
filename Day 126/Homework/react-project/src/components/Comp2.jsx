import { useEffect } from "react"

const Comp2 = () => {

    useEffect(() => {
        const Interval = setInterval(() => {
            alert("Hello")
        },1000)

        return () => clearInterval(Interval)
    })
}

export default Comp2;