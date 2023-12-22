import React from 'react';
import { Outlet } from "react-router-dom";
import Navbar from '../componets/Navbar';
import Footer from '../componets/Footer';
import '../App.css'

const Main = () => {
    return (
        <div className='bg-primaryBG'>
            <Navbar></Navbar>
            <div className='min-h-screen'>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;
