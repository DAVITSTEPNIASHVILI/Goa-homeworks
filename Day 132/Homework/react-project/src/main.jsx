import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { StudentsContext } from './context/StudentsContext.jsx'

createRoot(document.getElementById('root')).render(
  <StudentsContext.Provider value={["nikoloz iobidze", "lizi mchedlidze", "davit stepniashvili", "Petre Sikmashvili", "beqa gulbatabashvili", "deme maisuradze"]}>
    <App />
  </StudentsContext.Provider>
)
