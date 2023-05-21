import './App.css';
import Navbar from "../src/components/Navbar"
import Footer from "../src/components/Footer"
import Home from "./pages/Home";
import Login from "./pages/Login";
import About from "./pages/Aboutus"
import Sign from "./pages/SignUp"

import {BrowserRouter as  Router, Route, Routes} from "react-router-dom";

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
            </Routes>
            <Footer></Footer>
        </Router>
    </div>
  );
}

export default App;
