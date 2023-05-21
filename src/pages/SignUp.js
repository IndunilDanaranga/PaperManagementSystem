import React from 'react'
import "../styles/Signup.css"
function SignUp() {
    return (
        <div className="container">
            <form className="form" action="">
                <h1>Welcome !</h1>
                <input type="text" name="name" className="box" placeholder="Enter your name"/>
                <input type="email" name="email" className="box" placeholder="Enter Email"/>
                <input type="password" name="password" className="box" placeholder="Enter Password"/>
                <input type="password" name="password" className="box" placeholder="Enter Again Password"/>
                <input type="submit" value="Sign Up" id="submit"/>
            </form>
        </div>
    )
}

export default SignUp
