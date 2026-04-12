import { StrictMode } from 'react'
import React from 'react'
import ReactDOM from 'react-dom/client'  // import '/theme/index.css'
  import App from './App.jsx'
  import { BrowserRouter } from 'react-router-dom'
  import { HelmetProvider } from 'react-helmet-async';
import './theme/index.css'

 ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
)
