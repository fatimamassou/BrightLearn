import { Link } from "react-router-dom";
import logo from "../pictures/logo.png";
import Button from "./buttons";
import NavBarLinks from "./NavBarLinks";
export default function NavBar({bgColor='bg-transparent'}){
    return(
        <div className={`flex items-center justify-between px-10 py-2 ${bgColor} z-50 fixed top-0 left-0 w-full`}> 
            <Link to="/home">
                <img
                    src={logo} 
                    alt="Logo" 
                    className="w-[250px] cursor-pointer"
                />
            </Link>
            <div className="flex space-x-14">
                <NavBarLinks text="About" to="about" />
                <NavBarLinks text="Tutors" to="totors"/>
                <NavBarLinks text="Home" to="home"/>
                <NavBarLinks text="Contact" to="contact"/>
            </div>

            <div className="flex space-x-2">
                <Button text="Log In" type="secondary" />
                <Button text="Sign Up" type="primary" />
            </div>
        </div>
    );
};
