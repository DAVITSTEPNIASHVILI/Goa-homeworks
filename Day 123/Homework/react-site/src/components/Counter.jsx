import { useState } from "react"

const Counter = () => {
    const [count,setCount] = useState(0)

    return (
        <div style={{height:"100vh", width:"100vw", display:"flex", justifyContent:"center", alignItems:"center", gap:"50px", flexDirection:"column"}}>
            <h1>Counter App</h1>

            <p style={{fontSize:"20px"}}>{count}</p>

            <div>
                <button style={{marginRight:"20px", backgroundColor:"green", padding:"10px", borderRadius:"20px", border:"none"}} onClick={() => setCount(prev => prev + 1)}>Increase</button>
                <button style={{backgroundColor:"red", padding:"10px", borderRadius:"20px", border:"none"}} onClick={() => setCount(prev => prev - 1)}>Decrease</button>
            </div>
        </div>
    )
}

export default Counter;