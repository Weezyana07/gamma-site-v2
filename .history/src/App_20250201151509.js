import React from "react";
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter
import "./App.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

function App() {
  return (
    <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
      <Home />
      <Contact />
      <Contact />
      <Contact />
    </NavLink>
  );
}

export default App;
