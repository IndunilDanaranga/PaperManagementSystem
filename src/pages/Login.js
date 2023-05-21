import React from 'react'
import "../styles/Login.css"
import login from "../assest/login.png"
function Login() {
    return (
        <div className="container">
            <form className="form" action="">
                <h1>Welcome Again !</h1>
                <input type="email" name="email" className="box" placeholder="Enter Email"/>
                <input type="password" name="password" className="box" placeholder="Enter Password"/>
                <input type="submit" value="Sign In" id="submit"/>
            </form>
        </div>

    )
}

export default Login
