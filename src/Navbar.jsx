import React from "react";
import { NavLink } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
    return (
        <>
            <header>
                <h1 className="text-center">🔴LIVE   </h1>
                <h2>    Covid-19 Coronavirus <br/>Tracker
                     <span> <NavLink className="nav-link" to="/statewise">Check Statewise</NavLink> </span>
                </h2>
            </header>

            
        </>
    );
};

export default Navbar;