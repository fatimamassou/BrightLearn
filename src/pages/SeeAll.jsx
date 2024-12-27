import NavBar from "../components/navBar";
import Tetors from "./tetors";

function SeeAll() {
    return(
        <div className=" bg-bg_secondary w-full h-screen">
            <div className="mb-20">
                <NavBar bgColor="bg-secondary"/>
            </div>
            <div className="bg-bg_secondary">
                <Tetors showSeeAll={false} />
            </div>

        </div>

    );
}

export default SeeAll ;