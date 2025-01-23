import React from 'react';
import NavBar from '../components/navBar';
import SearchInput from '../components/SearchInput';

function Home() {
  return(
    <section id="home">
      <div className="home bg-cover bg-center w-screen h-screen" >
        <NavBar route='home'/>
        <div className="h-screen flex items-center justify-center">
          <div className="w-1/3 space-y-20">
            <div className="w-full flex items-center justify-center">
              <h1 className="tracking-wide text-center text-primary-100 font-normal text-5xl ">Where Learning Meets Passion</h1>
            </div>
            <SearchInput width="w-full" height='h-12' />
          </div>
        </div>
      </div>  
    </section>
  );
}

export default Home;
