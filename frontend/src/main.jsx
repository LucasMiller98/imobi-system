import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Imobi } from './pages/Imobi'
import { Register } from './pages/Register'
import { Error } from './pages/Error'
import { Profile } from './pages/Profile/index.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/profile',
        element: <Profile />
      },
      {
        path: '/imobi/:slug',
        element: <Imobi />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: 'register',
        element: <Register />
      },
      {
        path: '*',
        element: <Error />,
        errorElement: <Error />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
