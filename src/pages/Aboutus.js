import React from 'react'
import "../styles/Aboutus.css"
import AboutUs from "../assest/login.png"
function Aboutus() {
    return (
        <div>
            <div className="d-flex justify-content-center bg-secondary mb-3" id="flex2">
                <img src={AboutUs}/>
            </div>
            <div className="d-flex justify-content-center bg-secondary mb-3" id="d-flex1">
                <h1>About Us</h1>
            </div>
            <div className="d-flex justify-content-center bg-secondary mb-3">
                <p className="para">
                    A paper management system is a software application that helps individuals <br/>
                    and organizations efficiently organize, store, and retrieve their paper-based <br/>
                    documents. This system typically involves scanning, digitizing, and  <br/>
                    categorizing <br/>
                    paper documents to create a searchable digital database. The system can also <br/>
                    include tools for document collaboration, version control, and secure access <br/>
                    management. A paper management system can improve productivity, reduce <br/>
                    storage costs, and enhance data security by providing a centralized and <br/>
                    streamlined way to manage paper-based information.
                </p>
            </div>
        </div>

    )
}

export default Aboutus
