import About from "./about";
import Contact from "./contact";
import Home from "./home";
import Tetors from "./tetors";

function LandingPage() {

    return (
        <div className="overflow-hidden">
            <Home />
            <Tetors />
            <About />
            <Contact />
        </div>
    );
}

export default LandingPage;