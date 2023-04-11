import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from './components/ErrorPage';
import Home from './components/Home';
import Statistics from './components/Statistics';
import Applied from './components/Applied';
import Blog from './components/Blog';
import Details from './components/Details';



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch('featured-jobs.json')
      },
      {
        path: 'statistics',
        element: <Statistics />
      },
      {
        path: 'applied',
        element: <Applied />
      },
      {
        path: 'blog',
        element: <Blog />
      },
      {
        path: 'details/:id',
        element: <Details />,
        loader: () => fetch('featured-jobs.json')
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
