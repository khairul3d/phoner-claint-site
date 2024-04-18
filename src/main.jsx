import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Components/Main.jsx';
import Phone from './Components/Phone.jsx';
import Phn from './Components/Phn.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    
    children: [
      {
        path: "/phone",
        element: <Phone></Phone>,
        loader: () => fetch('http://localhost:5000/phone')
      },
      {
        path: "/phn/:id",
        element: <Phn></Phn>,
        loader: ({params}) => fetch(`http://localhost:5000/phone/${params.id}`)
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
