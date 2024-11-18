import logo from "../pectures/logo.png";
import NavBarLinks from "./NavBarLinks";
export default function NavBar(){
    return(
        <div className="flex items-center justify-center"> 
            <img
            src={logo} 
            alt="lhghehgelh" 
            className="w-[200px]"
            />
            <div className="px-2">
                <NavBarLinks text="Home" to="home"/>
                <NavBarLinks text="Tutors" to="totors"/>
                <NavBarLinks text="About" to="about"/>
                <NavBarLinks text="Contact" to="contact"/>

            </div>
        </div>
    );
};
