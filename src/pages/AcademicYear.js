import React from 'react'
import "../styles/Faculty.css"

function AcademicYear() {
    return (
        <div className="faculty">
            <h1 className="academicYearTitle">Choose Your Academic Year :</h1>
            <div className="facultyList">
                <a id="submit" href="../pages/Year">1St Year</a>
                <br/>
                <br/>
                <br/>
                <a id="submit" href="">2nd Year</a>
                <br/>
                <br/>
                <br/>
                <a id="submit" href="">3rd Year</a>
                <br/>
                <br/>
                <br/>
                <a id="submit" href="">4th Year</a>
            </div>
        </div>
    )
}

export default AcademicYear
