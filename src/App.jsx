import React from "react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/navBar";
import SearchInput from "./components/SearchInput";
function App() {
  return (
    <BrowserRouter>
        <NavBar />
        <div className="w-full flex justify-center aitems-center">
          <SearchInput width={1/2} height={80} />
        </div>
    </BrowserRouter>
  );
}

export default App;