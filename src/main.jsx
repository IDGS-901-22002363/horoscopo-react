// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Registrar el Service Worker del PWA
import { registerSW } from 'virtual:pwa-register'
registerSW({
  onRegistered() {
    console.log('✅ Service Worker registrado correctamente')
  },
  onOfflineReady() {
    console.log('🌙 PWA lista para funcionar offline')
  },
  onRegisterError(error) {
    console.error('❌ Error registrando SW:', error)
  },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
