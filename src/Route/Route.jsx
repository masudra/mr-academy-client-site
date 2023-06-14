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
import PrivateRoute from "./PrivateRoute";
import AllUsers from "../Pages/DashBoard/Allusers/AllUsers";
import MyClasses from "../Pages/DashBoard/Instructor/MyClasses";
import AddClasses from "../Pages/DashBoard/Instructor/AddClasses";

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
        },
        
      ]
    },
    {
      path:'dashboard',
      element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
      children: [
        {
          path: 'myselectedclass',
          element:<MySelectedClasses></MySelectedClasses>,
        },
        {
          path: 'myenrolledclasses',
          element: <MyEnrolledClasses></MyEnrolledClasses>,
        },
        {
          path: 'allusers',
          element: <AllUsers></AllUsers>,
        },
        {
          path: 'myclassess',
          element: <MyClasses></MyClasses>

        },
        {
          path: 'addclasses',
          element: <AddClasses></AddClasses>

        }
      ]
    }
  ]);