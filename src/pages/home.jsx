import React from "react";
import NavBar from "../components/navBar";
import SearchInput from "../components/SearchInput";

function Home() {
    return(
        <section id="home">
            <div className="home bg-cover bg-center w-screen h-screen" >
                <NavBar />
                <div className="h-screen flex flex-col space-y-20 pt-40">
                    <div className="w-full flex aitems-center justify-center">
                        <h1 className="w-1/3 tracking-wide text-center text-primary-100 font-normal text-5xl ">Where Learning Meets Passion</h1>
                    </div>
                    <SearchInput width='w-2/6' height='h-12' />
                </div>
            </div>  
        </section>
    );
}

export default Home;