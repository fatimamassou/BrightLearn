import Input from '../components/inputs';
import Lable from '../components/lable';
import studentImg from '../pictures/gambary.png';
import { Link } from 'react-router-dom';
function LogIn() {
    return(
        <div className="w-full lg:h-screen flex bg-secondary">
            <div className="lg:w-1/2">
                <img src={studentImg} alt="studentImg" className='w-full h-full'/>
            </div>
            <div className="lg:w-1/2 flex items-center justify-center">
                <div className="w-2/3 space-y-12    ">
                    <div className="flex items-center justify-center">
                        <div className="w-[500px] text-center space-y-2 text-primary-100 font-normal">
                            <h1 className="text-4xl">Welcome back, superhero!</h1>
                            <h1 className="text-2xl"> Your next mission is waiting! Log in to continue.</h1>
                        </div>
                    </div>
                    <h1 className="text-4xl text-primary-100 text-center">Log In</h1>
                    <form action="submitedform" className="space-y-12">
                      <div className="space-y-4">
                            <div>
                                <Lable>Your Email</Lable>
                                <Input type="email" Placeholder="Email Address" Id="" Name="" />
                            </div>
                            
                            <div>
                                <Lable>Password</Lable>
                                <Input type="password" Placeholder="Password" Id="" Name="" />
                            </div>
                            
                        </div>
                        <div className="space-y-6">
                            <Link 
                            to='/'
                            >
                               <button className="bg-primary-100 text-white text-xl py-3 rounded-lg w-full">Back to Learning</button> 
                            </Link>
                            <div className="h-[1px] w-full bg-primary-200"></div>
                            <div className="text-center text-primary">Not in the club yet?  
                                <Link to='/register'>
                                    <span className='text-primary-200 font-semibold underline underline-offset-2'> Join the club!</span> 
                                </Link>
                                </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LogIn;