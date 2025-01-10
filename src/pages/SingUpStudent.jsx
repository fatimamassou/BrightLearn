import Input from '../components/inputs';
import Lable from '../components/lable';
import studentImg from '../pictures/gambary.png';
function SingUpStudent() {
    return(
        <div className="w-full lg:h-screen flex bg-secondary">
            <div className="lg:w-1/2">
                <img src={studentImg} alt="studentImg" className='w-full h-full'/>
            </div>
            <div className="lg:w-1/2 flex items-center justify-center">
                <div className="w-2/3 space-y-10">
                    <h1 className="text-4xl text-primary-100 text-center">Sign Up</h1>
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
                            <Lable>Your Phone</Lable>
                            <Input type="tel" Placeholder="Phone number" Id="" Name="" />
                        </div>
                        
                        <div>
                            <Lable>Full Name</Lable>
                            <Input type="password" Placeholder="Full Name" Id="" Name="" />
                        </div>
                        
                        <div>
                            <Lable>Full Name</Lable>
                            <Input type="password" Placeholder="Full Name" Id="" Name="" />
                        </div>
                        
                        <button type="submit" className="bg-primary text-white text-xl py-3 rounded-lg w-full ">
                            Send 
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SingUpStudent;