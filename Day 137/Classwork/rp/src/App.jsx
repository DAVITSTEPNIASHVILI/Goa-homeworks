import { Routes, Route } from "react-router"
import Home from "./pages/Home"
import Info from "./pages/Info"
import NavBar from "./components/NavBar"

const App = () => {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/info" element={<Info />} />
      </Routes>
    </>
  )
}

export default App
