import Login from "./components/LogIn";
import NavBar from "./components/NavBar"
import { Routes, Route } from "react-router-dom"
import SignUp from "./components/SignUp";
import Main from "./components/Main";
import Cart from "./components/Cart";


const App = () => {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/main" element={<Main />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  )
}

export default App;
