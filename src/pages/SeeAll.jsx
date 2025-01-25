import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Tetors from '../components/TetorsComponent';
import NavBar from '../components/navBar';

function SeeAll() {
  const location = useLocation();
  useEffect(()=>{
    window.scrollTo(0,0);
  },[location]);
  return(
    <section id="seeAll" >
      <div className="bg-bg_secondary w-full min-h-screen">
        <div className="fixed top-0 left-0 w-full z-50">
          <NavBar />
        </div>
        <div className="pt-36 p-10">
          <Tetors/>
        </div>                              
      </div>  
    </section>

  );
}

export default SeeAll ;
