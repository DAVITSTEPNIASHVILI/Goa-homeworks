import { useState } from "react"

const SignUp = () => {
    const [text, setText] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault()

        const name = e.target.name.value
        const surname = e.target.surname.value
        const email = e.target.email.value
        const password = e.target.password.value

        if (typeof window !== "undefined") {
            const localName = localStorage.getItem("FormName")
            const localSurname = localStorage.getItem("FormSurname")
            const localEmail = localStorage.getItem("FormEmail")
            const localPassword = localStorage.getItem("FormPassword")

            if (name === localName &&
                surname === localSurname &&
                email === localEmail &&
                password === localPassword) {
                setText(true)
            } else {
                setText(false)
            }
        }
    }

    return (
        <div className="w-full h-[85vh] bg-amber-600 flex justify-center items-center">
            <form onSubmit={handleSubmit} className="w-[40%] h-[80%] bg-white rounded-2xl flex flex-col justify-around items-center">
                <h1>Sign Up</h1>

                <div className="w-[90%] h-[70%] flex flex-col justify-around items-center">
                    <input type="text" name="name" placeholder="Enter Name" className="rounded-3xl w-[90%] p-3 border"/>
                    <input type="text" name="surname" placeholder="Enter Surname" className="rounded-3xl w-[90%] p-3 border"/>
                    <input type="email" name="email" placeholder="Enter Email" className="rounded-3xl w-[90%] p-3 border"/>
                    <input type="password" name="password" placeholder="Enter Password" className="rounded-3xl w-[90%] p-3 border"/>
                    {text === true && <h1 className="text-green-500">You are in.</h1> || 
                    text === false && <h1 className="text-red-500">Something went wrong. Please try again</h1>}
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default SignUp