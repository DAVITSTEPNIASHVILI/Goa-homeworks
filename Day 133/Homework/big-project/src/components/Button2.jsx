const Button2 = ({text, onClick}) => {
    return (
        <button className="px-4 py-3 rounded-3xl text-white bg-blue-500 transition cursor-pointer" onClick={onClick}>
            {text}
        </button>
    )
}

export default Button2;