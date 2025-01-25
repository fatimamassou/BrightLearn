import { useState } from 'react';
import { Link } from 'react-router-dom';
import Input from '../components/inputs';
import Lable from '../components/lable';
import Select from '../components/select';
import teacherImg from '../pictures/glory.jpeg';
function SingUpTeacher() {
  const [selectedSubject , setSelectedSubject] = useState(undefined) ;
  const [fullName , setFullName] = useState(undefined) ;
  const [email , setEmail] = useState(undefined) ;
  const [phone , setPhone] = useState(0) ;
  const [description , setDescription] = useState(undefined) ;
  const [password , setPassword] = useState(undefined) ;
  const [confirmePassword , setConfirmePassword] = useState(undefined) ;
  
  return(
    <div className="w-full lg:h-screen flex bg-secondary">
      <div className="lg:w-1/2 flex items-center justify-center">
        <div className="w-2/3 space-y-4">
          <h1 className="text-4xl text-primary-100 text-center">Sign Up</h1>
          <form action="submitedform" className="space-y-4">
            <div className="space-y-2">
              <div>
                <Lable>Full Name</Lable>
                <Input type="text" Placeholder="Full Name" />
              </div>

              <div>
                <Lable>Your Email</Lable>
                <Input type="email" Placeholder="Email Address" />
              </div>
                            
              <div>
                <Lable>Your Phone</Lable>
                <Input type="tel" Placeholder="Phone number" />
              </div>

              <div>
                <Lable>Your Spiciality</Lable>
                <Select 
                  onChange={e => setSelectedSubject(e.target.value)} 
                  selectedSubject={selectedSubject} 
                />
              </div>

              <div>
                <Lable>Description</Lable>
                <Input type="text" Placeholder="Your profile ..." />
              </div>
              <div>
                <Lable>Password</Lable>
                <Input type="password" Placeholder="Password" />
              </div>
                            
              <div>
                <Lable>Confirme Password</Lable>
                <Input type="password" Placeholder="Confirme Password" />
              </div>
            </div>
            <div className="space-y-6">
              <Link 
                to='/subscripe'
              >
                <button className="bg-primary-100 text-white text-xl py-3 rounded-lg w-full ">Jump In!</button> 
              </Link>
              <div className="h-[1px] w-full bg-primary-200" />
              <div className="text-center text-primary">Already in the club? Jump to 
                <Link to='/login'>
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
