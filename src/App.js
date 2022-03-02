import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import "./index.css";
import About from "./About";
import Myprofile from "./Myprofile";
import Home from "./Home";
import Contact from "./Contact";
import Form from "./Form";
import Intro from "./Intro";

function App() {
  return (
    <Router>
      <div class="myapp min-h-screen bg-rose-100">
        <div className="flex flex-row justify-between items-center text-white">
          <h1 className="text-4xl font-extrabold font-sans float-left ml-32 p-3 text-mycolor">
            MyProject
          </h1>
          <nav>
            <ul className="flex flex-row justify-start space-x-20 text-center font-bold px-10 ">
              <li>
                <Link to="/" className="mynav">
                  HOME
                </Link>
              </li>
              <li>
                <Link to="/About" className="mynav">
                  ABOUT
                </Link>
              </li>
              <li>
                <Link to="/Contact" className="mynav">
                  CONTACT
                </Link>
              </li>
              <li>
                <Link to="/Myprofile" className="mynav">
                  SIGN IN
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <Switch>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
          <Route path="/Myprofile">
            <Myprofile />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
