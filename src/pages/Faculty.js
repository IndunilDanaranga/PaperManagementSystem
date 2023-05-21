import React from 'react'
import {FacultyList} from "../helpers/FacultyList"
function Faculty() {
    return (
        <div>
            <div className="faculty">
                <h1 className="facultyTitle">Choose Your Faculty :</h1>
                <div className="facultyList">
                    {FacultyList}
                </div>
            </div>
        </div>
    )
}

export default Faculty
