const Form = () => {
    const logTheInfo = e => {
        e.preventDefault()

        const info = {
            name : e.target.name.value
        }

        console.log(info)
    }
    return (
        <form onSubmit={logTheInfo}>
            <input type="text" placeholder="Enter Name: " name="name" /> <br /> <br />

            <button type="submit">Submit the form</button>
        </form>
    );
}

export default Form;