import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import P1 from "./components/P1"
import P2 from "./components/P2"
import P3 from "./components/P3"
const router = createBrowserRouter(createRoutesFromElements(
  <>
    <Route path="/" element={<P1 />} />
    <Route path="/p2" element={<P2 />} />
    <Route path="/p3" element={<P3 />} />
  </>
))
const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
