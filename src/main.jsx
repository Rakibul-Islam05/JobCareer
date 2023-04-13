import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
//import Statistics from './Component/Statistics/Statistics';
import Home from './Component/Home/Home';
//import Blogs from './Component/Blogs/Blogs';
//import Banner from './Component/Home/Banner/Banner';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Home></Home>,
    children:[
      {
        path:'/',
        element:<div></div>
      },
      {
        path:'/statistics',
        element:<div>this is statistics page</div>
      },
      {
        path:'/appliedJobs',
        element:<div>Appluy some job</div>
      },
      {
        path:'/blogs',
        element:<div>this is blog page</div>
      }
    ]
  },
]);             

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
