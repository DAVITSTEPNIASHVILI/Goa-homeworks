import Button from "./components/Button";


const App = () => {

    const handleClick = () => {
        alert("David")
    }
    return (
        <>
            <Button onClick={handleClick}/>
        </>
    )
}

export default App;