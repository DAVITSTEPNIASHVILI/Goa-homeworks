const Comp1 = () => {
    const colors = [
        "red", "blue", "green", "yellow", "orange",
        "purple", "pink", "brown", "black"
    ]

    const randomColor = () =>
        colors[Math.floor(Math.random() * colors.length)]

    const divStyle = {
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }

    const pStyle = {
        fontSize: "50px",
        color: randomColor()
    }

    return (
        <div style={divStyle}>
        <p style={pStyle}>Hello</p>
        </div>
    )
}

export default Comp1