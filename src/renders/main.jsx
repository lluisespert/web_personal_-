import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../styles/styles.css'
import App from '../aplications/App.jsx'

createRoot(document.getElementById('principal')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
