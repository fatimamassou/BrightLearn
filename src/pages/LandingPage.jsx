import { BrowserRouter } from 'react-router-dom';
import Home from "./home";
import Tetors from "./tetors";

function LandingPage() {

    return (
        <div>
            <Home/>
            <Tetors/>
        </div>
    );
}

export default LandingPage;