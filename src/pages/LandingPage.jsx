import Home from "./home";
import About from "./about";
import Contact from "./contact";
import Footer from "./footer";
import Tutors from "./tutors";

function LandingPage() {

    return (
        <div className="relative overflow-hidden">
            <div id="home absolute inset-x-0 top-0">
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
                <Footer/>
        </div>
    );
}

export default LandingPage;