import React from "react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/navBar";
import SearchInput from "./components/SearchInput";
function App() {
  return (
    <BrowserRouter>
        <NavBar />
        <div className="flex justify-center aitems-center">
          <SearchInput width={400} height={40} />
        </div>
    </BrowserRouter>
  );
}

export default App;