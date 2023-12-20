import React from 'react';
import { Outlet } from "react-router-dom";
import Navbar from '../componets/Navbar';
import Footer from '../componets/Footer';
import '../App.css'

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;
