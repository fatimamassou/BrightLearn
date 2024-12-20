import About from "./about";
import Home from "./home";
import Tetors from "./tetors";

function LandingPage() {

    return (
        <div className="overflow-hidden">
            <Home/>
            <Tetors/>
            <About />
        </div>
    );
}

export default LandingPage;