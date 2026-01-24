import { Link } from "react-router"

const NavBar = () => {
    return (
        <>
            <nav>
                <Link to="/">Home</Link> <br />
                <Link to="/info">Info</Link>
            </nav>
        </>
    )
}

export default NavBar