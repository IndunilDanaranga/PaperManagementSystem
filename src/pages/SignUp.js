import React,{useState} from "react";
import axois from 'axios'

import "../styles/Signup.css";
import alert from "bootstrap/js/src/alert";
import axios from "axios";
import {useNavigate} from "react-router-dom";
function SignUp() {
    let navigate = useNavigate();

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
    });

    const { name, email, password } = user;

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/api/v1/user/save", user);
        navigate("/");
    };




    return (
        <div className="container">
            <form className="form" action="" onSubmit={(e)=>onSubmit(e)}>
                <h1>Welcome !</h1>
                <input type="text" name="name" className="box" placeholder="Enter your name"
                       value={name} onChange={(e)=>onInputChange(e)}/>
                <input type="email" name="email" className="box" placeholder="Enter Email"
                       value={email}
                       onChange={(e) => onInputChange(e)}/>
                <input type="password" name="password" className="box" placeholder="Enter Password"
                       value={password} onChange={(e) => onInputChange(e)}/>
                <input type="password" name="password" className="box" placeholder="Enter Again Password"/>
                <input type="submit" value="Sign Up" id="submit"/>
            </form>
        </div>
    )
}

export default SignUp
