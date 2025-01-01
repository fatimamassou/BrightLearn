import { Link } from "react-scroll";
import logo from "../pictures/logo.png";
import Button from "./buttons";
import NavBarLinks from "./NavBarLinks";
import{ useEffect, useState  }from 'react';

export default function NavBar(){
    const [bgColor, setBgColor] = useState("bg-transparent");

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll("section");
            let currentBg = "bg-transparent";

        sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
                if (section.id === "tutors" || section.id === "contact" || section.id === "seeAll") {
                     currentBg = "bg-secondary";
                }
            }
        });

        setBgColor(currentBg);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
    return(
        <div 
            className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-10 py-2 ${bgColor}`}
        > 
            <Link
                to="home"
                smooth={true}
                duration={500}
            >
                <img
                    src={logo} 
                    alt="Logo" 
                    className="w-[250px] cursor-pointer"
                />
            </Link>
            <div className="flex space-x-14">
                <NavBarLinks text="Home" to="home"/>
                <NavBarLinks text="Tutors" to="tutors"/>
                <NavBarLinks text="About" to="about" />
                <NavBarLinks text="Contact" to="contact"/>
            </div>

            <div className="flex space-x-2">
                <Button text="Log In" type="secondary" />
                <Button text="Sign Up" type="primary" />
            </div>
        </div>
    );
};
