// src/main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './styles/App.css'
import App from './App.jsx'
// 1. IMPORT THE PROVIDER
import { TodoProvider } from './context/TodoContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* 2. WRAP THE APP COMPONENT */}
    <TodoProvider>
      <App />
    </TodoProvider>
  </StrictMode>,
)