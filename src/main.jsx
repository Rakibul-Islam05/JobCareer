import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Statistics from './Component/Statistics/Statistics';
import Home from './Component/Home/Home';
import Banner from './Component/Banner/Banner';
import Blogs from './Component/Blogs/Blogs';
import JobDetails from './Component/JobDetails/JobDetails';
import AppliedJobs from './Component/AppliedJobs/AppliedJobs';
import Feature from './Component/Feature/Feature';


const router = createBrowserRouter([
  {
    path:'/',
    element:<Home></Home>,
    children:[
      {
        path:'/',
        element:<Banner></Banner>
      },
      {
        path:'/statistics',
        element:<Statistics></Statistics>
      },
      {
        path:'job/:jobId',
        element:<JobDetails></JobDetails>
      },
      {
        path:'/appliedJobs',
        element:<AppliedJobs></AppliedJobs>
      },
      {
        path:'/blogs',
        element:<Blogs></Blogs>
      },
      {
        path:'/feature',
        element:<Feature></Feature>
      }
    ]
  },
]);             

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
