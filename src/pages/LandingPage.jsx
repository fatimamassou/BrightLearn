import Home from "./home";
import About from "./about";
import Contact from "./contact";
import Footer from "./footer";
import Tetors from "./tetors";

function LandingPage() {

    return (
        <div className="overflow-hidden">
            <Home />
            <Tetors /> 
            <About />
            <Contact />
            <Footer />
        </div>
    );
}

export default LandingPage;