import ChildComponent from "./components/ChildComponents"

const App = () => {

    const myObj = {num1 : 10, num2 : 20}

    return (
        <>
            <ChildComponent name='David' surname='Stepniashvili' />
            <ChildComponent myNum='10' myObj={myObj} />
        </>
    )
}

export default App;
