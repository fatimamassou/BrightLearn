import about2 from "../pictures/about2.jpeg" ; 
import about3 from "../pictures/about3.jpeg" ; 
import about4 from "../pictures/about4.jpeg" ;

function About () {
    return( 
        <div className="flex justify-center items-center w-full h-screen bg-secondary">
            <div className="max-w-[250px]">
                <div className="flex">
                    <img src={about2} alt="" className="border-2 rounded-l-xl shadow"/>
                    <img src={about4} alt="" className="border-2 border-white rounded-r-xl"/>
                </div>
                <div className="flex">
                    <img src={about3} alt="" className="border-2 border-white rounded-l-xl"/>
                    <img src={about2} alt="" className="border-2 rounded-r-xl shadow-100"/>
                </div>
            </div>
            <div className=""></div>

        </div>
    );
}

export default About ;