import NavBar from "../components/navBar";
import Tetors from "../components/TetorsComponent";

function SeeAll() {
    return(
        <div className="bg-bg_secondary w-full">
            <div className="fixed top-0 left-0 w-full z-50">
                <NavBar bgColor="bg-secondary"/>
            </div>
            <div className="pt-36 p-10">
                <Tetors numberOfCards={4}/>
            </div>

        </div>

    );
}

export default SeeAll ;