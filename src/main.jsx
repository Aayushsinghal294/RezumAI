import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { create } from 'domain'
import { createBrowserRouter } from 'react-router-dom'




const router= createBrowserRouter([
  {
    path: '/auth/sign-in',
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
