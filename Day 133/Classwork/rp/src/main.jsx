import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CountProvider } from './context/CountContext.jsx'

createRoot(document.getElementById('root')).render(
  <CountProvider>
    <App />
  </CountProvider>
)
