import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ButtonMain from './pages/Home/ButtonMain.jsx'
import StoreContext from './page2/StoreContext.jsx'
import ToggleTheme from './components/ToggleTheme/toggleTheme.jsx'
import Apps from './Apps.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Apps/>
  </StrictMode>,
)
