import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Input from '../components/inputs';
import Lable from '../components/lable';
import Select from '../components/select';
import teacherImg from '../pictures/glory.jpeg';
import Alert from '../components/Alert';  

function SingUpTeacher() {
  const [fullName , setFullName] = useState() ;
  const [email , setEmail] = useState() ;
  const [phone , setPhone] = useState() ;
  const [selectedSubject , setSelectedSubject] = useState() ;
  const [description , setDescription] = useState() ;
  const [password , setPassword] = useState() ;
  const [confirmePassword , setConfirmePassword] = useState() ;
  const [showAlert , setShowAlert] = useState(false);
  const addTeacher = () => {
    //
    setShowAlert(true);
  };

  const submit = (e) => {
    e.preventDefault();
    addTeacher();
  };

  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => {
        setShowAlert(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [showAlert]);
  
  return(
    <div className="w-full lg:h-screen flex bg-secondary">
      <div className="lg:w-1/2 flex items-center justify-center">
        {showAlert && <Alert message={`${fullName} added successfuly .`} type="success"/>}
        <div className="w-2/3 space-y-4">
          <h1 className="text-4xl text-primary-100 text-center">Sign Up</h1>
          <form onSubmit={submit} className="space-y-4">
            <div className="space-y-2">
              <div>
                <Lable>Full Name</Lable>
                <Input type="text" 
                  Placeholder="Full Name" 
                  value={fullName}            
                  onChange={(e)=> setFullName(e.target.value)} 
                />
              </div>

              <div>
                <Lable>Your Email</Lable>
                <Input type="email" 
                  Placeholder="Email Address" 
                  value={email}
                  onChange={(e)=> setEmail(e.target.value)} 
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
                <Lable>Your Spiciality</Lable>
                <Select 
                  onChange={e => setSelectedSubject(e.target.value)} 
                  selectedSubject={selectedSubject} 
                />
              </div>

              <div>
                <Lable>Description</Lable>
                <Input type="text" 
                  Placeholder="Your profile ..." 
                  onChange={(e)=> setDescription(e.target.value)}
                  value={description}
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
