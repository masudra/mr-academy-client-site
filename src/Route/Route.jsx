import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Regster from "../Pages/RegsterAndLogin/Regster/Regster";
import Login from "../Pages/RegsterAndLogin/Login/Login";
import Class from "../Pages/Class/Classes";
import DashBoard from "../LayOut/DashBoard";
import MySelectedClasses from "../Pages/DashBoard/MySelectedClasses/MySelectedClasses";
import MyEnrolledClasses from "../Pages/DashBoard/MyEnrolledClasses/MyEnrolledClasses";

   export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
            path: '/',
            element: <Home></Home>,
        },
        {
          path:'/login',
          element: <Login></Login>,

        },
        {
          path: '/regster',
          element: <Regster></Regster>,
        },
        {
          path: '/classes',
          element: <Class></Class>,
        }
      ]
    },
    {
      path:'dashboard',
      element: <DashBoard></DashBoard>,
      children: [
        {
          path: 'myselectedclass',
          element:<MySelectedClasses></MySelectedClasses>,
        },
        {
          path: 'myenrolledclass',
          element: <MyEnrolledClasses></MyEnrolledClasses>,
        },
        {
          path: 'myenrolledclasses',
          element: <MyEnrolledClasses></MyEnrolledClasses>,
        }
      ]
    }
  ]);