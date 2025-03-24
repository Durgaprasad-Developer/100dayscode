import React from "react";
import {Link} from "react-router-dom"
function Navbar(){


    return(
    <>
    <nav className="flex justify-between items-center p-4 shadow-md bg-white">

        {/* logo */}
        <img src="" alt="" className="" />
        {/* heading */}
        <div className=" ">
            <Link to="/">AI Creator Hub</Link>
        </div>

        <div className="">
        <Link to="/" className="nav-pages">Home</Link>
        <Link to="/dashboard" className="nav-page">Dashboard</Link>
        <Link to="/editor"  className="nav-page">Editor</Link>
        <Link to="/"><img src="" alt="" /></Link>
        <Link to="/analytics" className="/analytics">Analytics</Link>
        <Link to="/pricing" className="/pricing">Pricing</Link>
        /</div>

        <div>
            <input type="text" placeholder="search..." className="" />
            <button className="">Upgrade</button>
            <div>👤</div>
        </div>
    </nav>
    </>
    )
}
export default Navbar;