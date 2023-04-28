import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Outlet } from "react-router-dom";
import { Nav } from "./Nav/nav";
import { HashRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Outlet></Outlet>
      </div>
    </Router>
  );
}

export default App;
