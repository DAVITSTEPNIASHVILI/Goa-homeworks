const Login = () => {

    const handleSubmit = (e) => {
        e.preventDefault()


        localStorage.setItem("FormName", e.target.name.value)
        localStorage.setItem("FormSurname", e.target.surname.value)
        localStorage.setItem("FormEmail", e.target.email.value)
        localStorage.setItem("FormPassword", e.target.password.value)
    }

    return (
        <div className="w-full h-[85vh] bg-amber-200 flex justify-center items-center">
            <form onSubmit={handleSubmit} className="w-[40%] h-[80%] bg-white rounded-2xl flex flex-col justify-around items-center">
                <h1>Log In</h1>

                <div className="w-[90%] h-[70%] flex flex-col justify-around items-center">
                    <input type="text" name="name" placeholder="Enter Name" className="rounded-3xl w-[90%] p-3 border"/>
                    <input type="text" name="surname" placeholder="Enter Surname" className="rounded-3xl w-[90%] p-3 border"/>
                    <input type="email" name="email" placeholder="Enter Email" className="rounded-3xl w-[90%] p-3 border"/>
                    <input type="password" name="password" placeholder="Enter Password" className="rounded-3xl w-[90%] p-3 border"/>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Login