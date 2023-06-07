import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Regster from "../Pages/RegsterAndLogin/Regster/Regster";
import Login from "../Pages/RegsterAndLogin/Login/Login";

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
        }
      ]
    },
  ]);