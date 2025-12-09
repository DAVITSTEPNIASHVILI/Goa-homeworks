const Div = () => {
    const handleChange = e => {
        document.getElementById("div").style.backgroundColor = e.target.value
    }

    return (
        <div style={{height:"100vh", width:"100%", display:"flex", justifyContent:"center", alignItems:"center"}} id="div">
            <form>
                <input type="text" onChange={handleChange}/>
            </form>
        </div>
    );
}

export default Div;