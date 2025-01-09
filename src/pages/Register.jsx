import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import studentImage from '../pictures/student-Demon.jpeg' ;
import teacherImage from '../pictures/Kim-Namjoooon.jpeg' ;
import { Link } from 'react-router-dom';

function Register() {
    return(
        <div className="home w-full h-screen">
            <Link to='/' >
                <KeyboardDoubleArrowLeftIcon 
                    fontSize='large'
                    className='cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-800'
                />
            </Link>
           <h1>Time to choose your path! Are you here to learn or to teach?</h1>
           <div className="grid gap-8 md:grid-cols-2">
                <div className="">
                    <img src={studentImage} alt="imgStudent" />
                    <h2>Student</h2>
                </div>
                <div className="">
                    <img src={teacherImage} alt="" />
                    <h2>Teacher</h2>
                </div>
            </div> 
        </div>

    );
}

export default Register;