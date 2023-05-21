import React,{useState} from 'react'
import Logo from "../assest/logo.png"
import {Link} from "react-router-dom";
import ReorderIcon from '@mui/icons-material/Reorder';
import "../styles/Navbar.css"
function Navbar() {
    const [openlinks, setOpenLinks] = useState(false);
    const toggleNavbar = () => {
       setOpenLinks(!openlinks)
    };
    return (
        <div className="navbar">
            <div className="leftSide" id={ openlinks ? "open" : "close"}>
                <img className="img" src={Logo}/>
                <div className="hiddenLinks">
                    <Link to="" >Home</Link>
                    <Link to="./AboutUs">About Us</Link>
                    <Link to="/Login">Login</Link>
                    <Link to="/SignUp">Sign Up</Link>
                </div>
                <p className="siteName">Paper Management System</p>
            </div>

            <div className="rightSide">
                <Link to="" >Home</Link>
                <Link to="/AboutUs">About Us</Link>
                <Link to="/Login">Login</Link>
                <Link to="/SignUp">Sign Up</Link>
                <button onClick={toggleNavbar} className="buttons">
                    <ReorderIcon></ReorderIcon>
                </button>
            </div>
        </div>
    )
}

export default Navbar
