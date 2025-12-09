const myObj = [
    {userName: "David",
    userAge: 12},

    {userName: "Deme",
    userAge: 12},

    {userName: "Petre",
    userAge: 12},
]
console.log(myObj)

const Comp1 = () => {

    return (
        <ul>
            {
                myObj.map((el,ind) => (
                    
                    <li key={ind}>
                        <p>{el.userName}</p>
                        <i>{el.userAge}</i>
                    </li>
                    
                )) 
            }
        </ul>
    )
}

export default Comp1;