import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Home from "./components/Home"
import Hello from "./components/Hello"

const App = () => {

  const router = createBrowserRouter(createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/hello" element={<Hello />} />
    </>
  ))

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
