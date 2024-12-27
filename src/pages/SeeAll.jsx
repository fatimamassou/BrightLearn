import NavBar from "../components/navBar";
import Tetors from "../components/TetorsComponent";

function SeeAll() {
    return(
        <div className=" bg-bg_secondary w-full h-screen">
            <div className="">
                <NavBar bgColor="bg-secondary"/>
            </div>
            <div className="overflow-hidden">
                <Tetors numberOfCards={4}/>
            </div>

        </div>

    );
}

export default SeeAll ;