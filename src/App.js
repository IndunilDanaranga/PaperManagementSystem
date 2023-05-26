import './App.css';
import Navbar from "../src/components/Navbar"
import Footer from "../src/components/Footer"
import Home from "./pages/Home";
import Login from "./pages/Login";
import About from "./pages/Aboutus"
import Sign from "./pages/SignUp"
import Faculty from "./pages/Faculty"
import Department from "./pages/Department"

import {BrowserRouter as  Router, Route, Routes} from "react-router-dom";
import AcademicYear from "./pages/AcademicYear";
import Semester from "./pages/Semester";
import SemesterOne from "./pages/SubjectSemone"
import SemesterTwo from "./pages/SubjectSemTwo"

function App() {
  return (
    <div className="App">
        <Router>
            <Navbar></Navbar>
            <Routes>
                <Route path="/" Component={Home}></Route>
                <Route path="/Login" Component={Login}></Route>
                <Route path="/AboutUs" Component={About}></Route>
                <Route path="/SignUp" Component={Sign}></Route>
                <Route path="/pages/Faculty" Component={Faculty}></Route>
                <Route path="/pages/Department" Component={Department}></Route>
                <Route path="/pages/AcademicYear" Component={AcademicYear}></Route>
                <Route path="/pages/Year" Component={Semester}></Route>
                <Route path="/pages/Subject" Component={SemesterOne}></Route>
                <Route path="/pages/SubjectS" Component={SemesterTwo}></Route>

            </Routes>
            <Footer></Footer>
        </Router>
    </div>
  );
}

export default App;
