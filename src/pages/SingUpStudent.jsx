import { Link } from 'react-router-dom';
import Input from '../components/inputs';
import Lable from '../components/lable';
import studentImg from '../pictures/gambary.png';
import { useState } from 'react';

function SingUpStudent() {
  const [fullName , setFullName] = useState('') ;
  const [email , setEmail] = useState('') ;
  const [phone , setPhone] = useState('') ;
  const [password , setPassword] = useState('') ;
  const [confirmePassword , setConfirmePassword] = useState('') ;
  
  const addStudent = () => {
    //
    cancelSelection();
  };
  
  const submit = (e) => {
    e.preventDefault();
    addStudent();
  };
  
  const cancelSelection = () => {
    setFullName('');
    setEmail('');
    setPhone('');
    setPassword('');
    setConfirmePassword('');
  };

  return(
    <div className="w-full lg:h-screen flex bg-secondary">
      <div className="lg:w-1/2">
        <img src={studentImg} alt="studentImg" className='w-full h-full'/>
      </div>
      <div className="lg:w-1/2 flex items-center justify-center">
        <div className="w-2/3 space-y-6">
          <h1 className="text-4xl text-primary-100 text-center">Sign Up</h1>
          <form onSubmit={submit} className="space-y-12">
            <div className="space-y-4">
              <div>
                <Lable>Full Name</Lable>
                <Input type="text" 
                  Placeholder="Full Name" 
                  onChange={(e)=> setFullName(e.target.value)} 
                  value={fullName}
                />
              </div>

              <div>
                <Lable>Your Email</Lable>
                <Input type="email" 
                  Placeholder="Email Address" 
                  onChange={(e)=> setEmail(e.target.value)} 
                  value={email}
                />
              </div>
                            
              <div>
                <Lable>Your Phone</Lable>
                <Input type="tel"
                  Placeholder="Phone number" 
                  onChange={(e)=> setPhone(e.target.value)} 
                  value={phone}
                />
              </div>
                            
              <div>
                <Lable>Password</Lable>
                <Input type="password" 
                  Placeholder="Password" 
                  onChange={(e)=> setPassword(e.target.value)} 
                  value={password}
                />
              </div>
                            
              <div>
                <Lable>Confirme Password</Lable>
                <Input type="password" 
                  Placeholder="Confirme Password" 
                  onChange={(e)=> setConfirmePassword(e.target.value)} 
                  value={confirmePassword}
                />
              </div>
            </div>
            <div className="space-y-6">
              <Link 
                to='/subscripe'
              >
                <button className="bg-primary-100 text-white text-xl py-3 rounded-lg w-full hover:shadow-200 ">Jump In!</button> 
              </Link>
              <div className="h-[1px] w-full bg-primary-200" />
              <div className="text-center text-primary">Already in the club? Jump to 
                <Link to='/login'>
                  <span 
                    className='text-primary-200 font-semibold underline underline-offset-2'
                  > Log In!
                  </span> 
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SingUpStudent;
