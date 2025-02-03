import React from "react";
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter
import "./App.css";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
}

export default App;
