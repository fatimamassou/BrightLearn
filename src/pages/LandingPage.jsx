import Home from "./home";
import About from "./about";
import Contact from "./contact";
import Footer from "./footer";
import Tutors from "./tutors";

function LandingPage() {

    return (
        <div className="overflow-hidden">
            <div id="home">
                <Home />
            </div>
            <div id="tutors">
                <Tutors /> 
            </div>
            <div id="about">
                <About />
            </div>
            <div id="contact">
                <Contact />
            </div>
            <div className="absolute inset-x-0 bottom-0">
                <Footer/>
            </div>
        </div>
    );
}

export default LandingPage;