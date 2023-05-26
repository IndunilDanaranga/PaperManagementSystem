import React from 'react'
import '../styles/Faculty.css'
function Faculty() {
    return (
        <div>
            <div className="faculty">
                <h1 className="facultyTitle">Choose Your Faculty :</h1>
                <div className="facultyList">
                    <a className="button" id="submit" href="../pages/Department">Faculty of Technology Studies</a>
                    <br/>
                    <br/>
                    <br/>
                    <a id="submit" className="button" href="">Faculty of Applide Science</a>
                    <br/>
                    <br/>
                    <br/>
                    <a className="button" id="submit" href="">Faculty of Business Studies</a>
                </div>
            </div>
        </div>
    )
}

export default Faculty
