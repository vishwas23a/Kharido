import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import './index.css'
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx';
import Category from './components/Category.jsx';
import CartHandler from './components/CartHandler.jsx';
import Auth from './components/Auth.jsx';
import SignUp from './components/SignUp.jsx';

const router= createBrowserRouter([

  {
    path:"/",
    element:<Navbar/>,
    children:[
      {
        path:"/",
        element:<Home/>,
      },
      {
        path:"Category",
        element:<Category/>,
      },
      {
          path:"CartHandler",
          element:<CartHandler/>
      },
      {
        path:"Auth",
        element:<Auth/>,
      
      },
      {
        path:"/SignUp",
        element:<SignUp/>
      }
  
    ]
  },
 

])




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
