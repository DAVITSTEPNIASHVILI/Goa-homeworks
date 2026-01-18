const Button = ({text, onClick}) => {
    return (
        <button className="px-4 py-3 rounded-3xl text-white border-black border hover:bg-white hover:text-black transition cursor-pointer" onClick={onClick}>
            {text}
        </button>
    )
}

export default Button