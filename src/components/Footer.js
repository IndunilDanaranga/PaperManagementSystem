import React from 'react'
import "../styles/Footer.css"
import FacebookIcon from "../assest/facebook.png";
import TwitterIcon from "../assest/twitter.png";
import LinkedInIcon from "../assest/linkedin.png";
import GitHubIcon from "../assest/github.png";
import Copyright from "../assest/copyright.png";
function Footer() {
    return (
        <div className="footer">
            <div className="footerleftSide">
                <img className="icon" src={Copyright}/>
                <p>2023 ALL RIGHTS RESERVED.</p>
            </div>
            <div className="footerrightSide">
                <a className="link" href="facebook.com"> <img className="icon" src={FacebookIcon}/> </a>
                <a className="link" href="facebook.com"> <img className="icon" src={TwitterIcon}/> </a>
                <a className="link" href="facebook.com"> <img className="icon" src={LinkedInIcon}/> </a>
                <a className="link" href="facebook.com"> <img className="icon" src={GitHubIcon}/> </a>
            </div>
        </div>
    )
}

export default Footer
