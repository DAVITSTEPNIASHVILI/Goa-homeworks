import { Routes, Route } from "react-router"
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import About from "./pages/About"

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}

export default App

