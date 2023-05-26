import React from 'react'
import "../styles/Faculty.css"
function Semester() {
    return (
        <div className="faculty">
            <h1 className="semesterTitle">Choose Your Semester :</h1>
            <div className="facultyList">
                <a id="submit" href="../pages/Subject">1St Semester</a>
                <br/>
                <br/>
                <br/>
                <a id="submit" href="../pages/SubjectS">2nd Semester</a>
            </div>
        </div>
    )
}

export default Semester
