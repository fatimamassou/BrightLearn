import NavBar from "../components/navBar";
import Tetors from "../components/TetorsComponent";
import Footer from "./footer";

function SeeAll() {
    return(
        <section id="seeAll" >
            <div className="bg-bg_secondary w-full">
                <div className="fixed top-0 left-0 w-full z-50">
                    <NavBar bgColor="bg-secondary"/>
                </div>
                <div className="pt-36 p-10">
                    <Tetors/>
                </div>
                <Footer/>
            </div>
        </section>

    );
}

export default SeeAll ;