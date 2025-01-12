import Input from '../components/inputs';
import Lable from '../components/lable';
import teacherImg from '../pictures/glory.jpeg';
import { Link } from 'react-router-dom';
function SingUpTeacher() {
    return(
        <div className="w-full lg:h-screen flex bg-secondary">
            <div className="lg:w-1/2 flex items-center justify-center">
                <div className="w-2/3 space-y-6">
                    <h1 className="text-4xl text-primary-100 text-center">Sign Up</h1>
                    <form action="submitedform" className="space-y-12">
                      <div className="space-y-4">
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
                                <Lable>Password</Lable>
                                <Input type="password" Placeholder="Password" Id="" Name="" />
                            </div>
                            
                            <div>
                                <Lable>Confirme Password</Lable>
                                <Input type="password" Placeholder="Confirme Password" Id="" Name="" />
                            </div>
                        </div>
                        <div className="space-y-6">
                            <Link 
                            to='/singin'
                            >
                               <button className="bg-primary-100 text-white text-xl py-3 rounded-lg w-full ">Jump In!</button> 
                            </Link>
                            <div className="h-[1px] w-full bg-primary-200"></div>
                            <div className="text-center text-primary">Already in the club? Jump to 
                                <Link to='/singin'>
                                    <span className='text-primary-200 font-semibold underline underline-offset-2 '> Log In!</span> 
                                </Link>
                                </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="lg:w-1/2">
                <img src={teacherImg} alt="studentImg" className='w-full h-full'/>
            </div>
        </div>
    );
};

export default SingUpTeacher;