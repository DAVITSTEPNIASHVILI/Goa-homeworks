const Button = ({text, bgColor, onClick}) => {
    return (
        <div style={{width: "100%", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
            <button onClick={onClick} style={{backgroundColor: {bgColor}, }}>{text}</button>
        </div>
    )
}

export default Button