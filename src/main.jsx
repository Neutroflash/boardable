import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App/App.jsx'
import { RouterProvider } from "react-router-dom";
import Router from './router.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={Router}></RouterProvider>
  </React.StrictMode>,
)
