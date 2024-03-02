import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CallHistory } from './components/CallHistory.jsx';
import { UserDetails } from './components/UserDetails.jsx';
import { HomePage } from './components/HomePage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/callHistory',
    element: <CallHistory />
  },
  {
    path: '/userDetails',
    element: <UserDetails />
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
