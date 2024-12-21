import Input from "../components/inputs";
import Lable from "../components/lable";
import Phone from "../pictures/purplePhone.jpeg";
import Gmail from "../pictures/purpleGmail.jpeg";
import Youtube from "../pictures/youtube.jpeg";
import Insta from "../pictures/App icon.jpeg";
import Pinterest from "../pictures/Pinterest.jpeg";
import Tiktok from "../pictures/Purple aesthetic icon TikTok.jpeg";


function Contact() {
    return(
        <div className="h-screen bg-bg_secondary flex items-center justify-center">
            <div className="max-w-[500px] p-6">
                <form action="submitedform" className="space-y-4">
                    
                    <div className="">
                        <Lable>Full Name</Lable>
                        <Input type="text" Placeholder="Full Name" Id="" Name="" />
                    </div>

                    <div className="">
                        <Lable>Your Email</Lable>
                        <Input type="email" Placeholder="Email Address" Id="" Name="" />
                    </div>
                    
                    <div className="">
                        <Lable>Subject</Lable>
                        <Input type="text" Placeholder="Subject" Id="" Name="" />
                    </div>
                    
                    <div className="">
                        <Lable>Full Name</Lable>
                        <Input type="textarea" Placeholder="Your Message ....." Id="" Name="" />                
                    </div>
                    
                    <button type="submit" className="bg-primary text-white text-xl px-12 py-2 rounded-lg">
                        Send 
                    </button>
                </form>
            </div>
            <div className="">
                <h1 className="">Contact Us</h1>
                <div className="">
                    <h1>Hit Us Up!</h1>
                    <p>Got a question, an idea, or just want to chat? We're all about good vibes and happy learning! 
                        Drop us a line and let's make something awesome together!
                    </p>
                </div>

                <div className="flex">
                    <div className="flex">
                        <img src={Phone} alt="Phone" className="w-16 rounded-lg"/>
                        <div className="">
                            <p>Call Us</p>
                            <p>+212-645-678-890</p>
                        </div>
                    </div>
                    <div className="flex">
                        <img src={Gmail} alt="Gmail" className="w-16 rounded-lg"/>
                        <div className="">
                            <p>Email US</p>
                            <p>BrightLearn@gmail.com</p>
                        </div>
                    </div>
                </div>

                <div className="block space-y-4">
                    <h1>Follow Us !</h1>
                    <div className="flex space-x-2">
                        <img src={Insta} alt="Gmail" className="w-8 rounded-lg"/>
                        <img src={Tiktok} alt="Tiktok" className="w-8 rounded-lg"/>
                        <img src={Youtube} alt="Youtube" className="w-8 rounded-lg"/>
                        <img src={Pinterest} alt="Pinterest" className="w-8 rounded-lg"/>
                    </div>
                </div>

            </div>
        </div>    
    );
}

export default Contact ;