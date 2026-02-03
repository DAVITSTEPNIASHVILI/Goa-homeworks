import { Routes, Route } from "react-router"
import Home from "./pages/Home"
import Other from "./pages/Other"

const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/other" element={<Other />} />
    </Routes>
  )
}

export default App
