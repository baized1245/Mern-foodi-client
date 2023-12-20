import React from "react";
import {
    createBrowserRouter
  } from "react-router-dom";
import Home from "../pages/home/Home";
import Main from "../layout/Main";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
            path: '/',
            element: <Home/>
        }
      ]
    },
  ]);

  export default router;