import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Route/Route'
import AuthProvider from './Pages/Provider/AuthProvider'
import { HelmetProvider } from 'react-helmet-async';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
     <HelmetProvider>
     <div className='mx-10'>
    <RouterProvider router={router}></RouterProvider>
    </div>
     </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>,
)
