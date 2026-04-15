import { StrictMode } from 'react'
import React from 'react'
import ReactDOM from 'react-dom/client'  // import '/theme/index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async';
import './theme/index.css'
import { Analytics } from '@vercel/analytics/react'

 ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
        <Analytics />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
)
