import { BrowserRouter } from 'react-router-dom';
import Home from "./home";
import Tetors from "./tetors";

function LandingPage() {

    return (
        <BrowserRouter>
            <Home />
            <Tetors />
        </BrowserRouter>
    );
}

export default LandingPage;