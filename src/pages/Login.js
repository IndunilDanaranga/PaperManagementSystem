import React,{useState,useRef,useEffect} from 'react'
import "../styles/Login.css";
import axios from "axios";
import {useNavigate} from "react-router-dom";
function Login() {

    return (
        <div className="container">

            <form className="form" action="" >
                <h1>Welcome Again !</h1>
                <input type="email" name="email" className="box"
                       placeholder="Enter Email"

                       required
                />
                <input type="password" name="password" className="box"
                       placeholder="Enter Password"
                       required
                />
                <a id="submit" href="../pages/Faculty">Sign In</a>
            </form>
        </div>

    )


}

export default Login
