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
        <div className="h-screen bg-bg_secondary flex items-center justify-center py-10 space-x-12">
            <div className="max-w-[600px] p-6 flex-grow">
                <form action="submitedform" className="space-y-4">
                    <div>
                        <Lable>Full Name</Lable>
                        <Input type="text" Placeholder="Full Name" Id="" Name="" />
                    </div>

                    <div>
                        <Lable>Your Email</Lable>
                        <Input type="email" Placeholder="Email Address" Id="" Name="" />
                    </div>
                    
                    <div>
                        <Lable>Subject</Lable>
                        <Input type="text" Placeholder="Subject" Id="" Name="" />
                    </div>
                    
                    <div>
                        <Lable>Message</Lable>
                        <Input type="textarea" Placeholder="Your Message ....." Id="" Name="" />                
                    </div>
                    
                    <button type="submit" className="bg-primary text-white text-xl px-12 py-2 rounded-lg">
                        Send 
                    </button>
                </form>
            </div>

            <div className="space-y-6 max-w-[540px] pb-16">
                <h1 className="text-primary-200 text-4xl ">Contact Us</h1>
                <div className="text-secondary-200 space-y-2">
                    <h1 className="text-5xl">Hit Us Up!</h1>
                    <p>Got a question, an idea, or just want to chat? We're all about good vibes and happy learning! 
                        Drop us a line and let's make something awesome together!
                    </p>
                </div>

                <div className="flex text-secondary-200 justify-between">

                    <div className="flex space-x-6">
                        <img src={Phone} alt="Phone" className="w-16 rounded-lg"/>
                        <div className="space-y-1">
                            <p className="text-lg font-medium text-secondary-200">Call Us</p>
                            <p>+212-645-678-890</p>
                        </div>
                    </div>

                    <div className="flex space-x-6">
                        <img src={Gmail} alt="Gmail" className="w-16 rounded-lg"/>
                        <div className="space-y-1">
                            <p className="text-lg font-medium text-secondary-200">Email Us</p>
                            <p>BrightLearn@gmail.com</p>
                        </div>
                    </div>
                </div>

                <div className="block space-y-2 text-lg font-medium text-secondary-200">
                    <h1>Follow Us!</h1>
                    <div className="flex space-x-2">
                        <img src={Insta} alt="Instagram" className="w-8 rounded-lg"/>
                        <img src={Tiktok} alt="TikTok" className="w-8 rounded-lg"/>
                        <img src={Youtube} alt="YouTube" className="w-8 rounded-lg"/>
                        <img src={Pinterest} alt="Pinterest" className="w-8 rounded-lg"/>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Contact ;