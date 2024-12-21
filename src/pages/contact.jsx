import Input from "../components/inputs";
import Lable from "../components/lable";

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
                <div className="">
                    <div className="">
                        <img src="" alt="" />
                    </div>
                    <div className="">

                    </div>
                </div>
            </div>
        </div>    
    );
}

export default Contact ;