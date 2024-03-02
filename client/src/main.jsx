import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Transcripts } from './components/Transcripts.jsx';
import { ContactDetails } from './components/ContactDetails.jsx';
import { HomePage } from './components/HomePage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/transcripts',
    element: <Transcripts />
  },
  {
    path: '/contact-details',
    element: <ContactDetails />
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
