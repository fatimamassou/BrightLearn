import Button from "../components/buttons";
import about2 from "../pictures/about2.jpeg" ; 
import about3 from "../pictures/about3.jpeg" ; 
import about4 from "../pictures/about4.jpeg" ;

function About () {
    return( 
        <section id="about"> 
            <div className="flex space-x-20 justify-center items-center w-full h-screen bg-secondary ">
                <div className="max-w-[600px]">
                    <div className="flex">
                        <img src={about2} alt="img" className="rounded-l-3xl rounded-tr-3xl shadow w-1/2"/>
                        <img src={about3} alt="img" className="border-4 border-white rounded-r-3xl rounded-tl-3xl w-1/2"/>
                    </div>
                    <div className="flex">
                        <img src={about4} alt="img" className="border-4 border-white rounded-l-3xl rounded-br-3xl w-1/2"/>
                        <img src={about2} alt="img" className="rounded-b-3xl rounded-tr-3xl shadow-100 w-1/2"/>
                    </div>
                </div>
                <div className="block max-w-[620px] space-y-6 tracking-wide text-primary-100">
                    <h1 className="font-normal text-5xl">Welcome to BrightLearn</h1>
                    <p className="leading-9 text-xl font-normal">BrightLearn is a platform dedicated to connecting students with expert tutors for personalized learning.
                        Our goal is to provide accessible, high-quality education through interactive lessons tailored to individual needs.
                        We believe every student deserves the opportunity to succeed, 
                        and our passionate tutors are here to guide you every step of the way.
                    </p>
                    <div>
                        <Button text="Let's Gooo!" to='/register' type="primary"/>                    
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About ;