import { useEffect } from "react";

const Comp1 = () => {
    useEffect(() => {
        const handleClick = () => {
        console.log("Hello");
    }

        window.addEventListener("click", handleClick)
        return () => {
            window.removeEventListener("click", handleClick)
        }}
    ,[]
    )

    return <button>Click me</button>;
};

export default Comp1;