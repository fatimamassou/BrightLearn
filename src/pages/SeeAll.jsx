import Tetors from "../components/TetorsComponent";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Layout from "../layouts/Layout";

function SeeAll() {
    const location = useLocation();
    useEffect(()=>{
        window.scrollTo(0,0);
    },[location])
    return(
        <section id="seeAll" >
           <Layout>
                <Tetors/>     
           </Layout>
        </section>

    );
}

export default SeeAll ;