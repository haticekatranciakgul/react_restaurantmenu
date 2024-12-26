import React from 'react'
import Navbar from "../Components/Navbar"
import { Outlet } from 'react-router-dom'


function Home() {
    return (
        <div className="container ">
            <Navbar />
            <Outlet />
         
        </div>
    )
}

export default Home
