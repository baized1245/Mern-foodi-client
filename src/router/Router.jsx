import React from "react";
import {
    createBrowserRouter
  } from "react-router-dom";
import Home from "../pages/home/Home";
import Main from "../layout/Main";
import Menu from "../pages/shop/Menu";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
            path: '/',
            element: <Home/>
        },
        {
            path: '/menu',
            element: <Menu/>
        },
      ]
    },
  ]);

  export default router;