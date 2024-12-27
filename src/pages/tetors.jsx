import { Link } from "react-router-dom";
import TetorsComponent from "../components/TetorsComponent";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Tetors() {
    
    return(
        <div className="px-10 w-screen h-screen bg-bg_secondary flex items-center">
                <div className="flex justify-center items-center">
                    <TetorsComponent numberOfCards={4} />
                </div>
                <div className="text-center">
                    <Link to="See All page" className="text-primary-200 font-medium text-3xl space-x-2 border-b-4 border-primary-200 py-2"> 
                        <span>
                            See All
                        </span>
                        <span>
                            <ArrowForwardIcon fontSize='large'/>    
                        </span> 
                     </Link> 
                </div>
            </div>
    );
}

export default Tetors;