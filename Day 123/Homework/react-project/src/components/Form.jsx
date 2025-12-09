const Form = () => {
    const handleSubmit = (e) => {
        e.preventDefault()

        const myObj = {
            name: e.target.name.value,
            surname: e.target.surname.value,
            email: e.target.email.value,
            password: e.target.password.value,
        }

        console.log(myObj)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name"/>
            <input type="text" name="surname"/>
            <input type="email" name="email" />
            <input type="password" name="password"/>

            <button type="submit">submit</button>
        </form>
    )
}

export default Form;