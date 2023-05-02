import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Outlet } from "react-router-dom";
import { Nav } from "./Nav/nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Outlet></Outlet>
    </div>
  );
}

export default App;
