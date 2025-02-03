import React from "react";
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter
import "./App.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Home />
      <Contact />
      <Contact />
      <Contact />
    </BrowserRouter>
  );
}

export default App;
