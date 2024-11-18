import React from "react";
import Button from "./buttons";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./navBar";
function App() {
  return (
    <BrowserRouter>
        <NavBar />
    </BrowserRouter>
  );
}

export default App;