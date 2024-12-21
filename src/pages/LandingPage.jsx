import Home from "./home";
import Tetors from "./tetors";
import About from "./about";
import Contact from "./contact";
import Footer from "./footer";

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