import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import studentImage from '../pictures/student-Demon.jpeg' ;
import teacherImage from '../pictures/Kim-Namjoooon.jpeg' ;
import { Link } from 'react-router-dom';

function Register() {
    return(
        <div className="home w-full lg:h-screen md:h-screen sm:h-fit px-8 py-8 m-0 flex items-center justify-center">
            <div className="space-y-12 lg:w-2/5 md:w-2/3 sm:w-full">
                <Link to='/' >
                    <KeyboardDoubleArrowLeftIcon 
                        fontSize='large'
                        className='cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-800'
                    />
                </Link>
                <h1 className="tracking-wide text-center text-primary-100 font-normal text-3xl">Time to choose your path! Are you here to learn or to teach?</h1>
                <div className="grid gap-8 md:grid-cols-2 w-full">
                    <div className="w-fit text-center space-y-8">
                        <img src={studentImage} alt="imgStudent" className='w-96 h-72 object-cover rounded-custom' />
                        <h2>Student</h2>
                    </div>
                    <div className="w-fit text-center space-y-8">
                        <img src={teacherImage} alt="imgTeacher" className='w-96 h-72 object-cover rounded-custom' />
                    <h2>Teacher</h2>
                    </div>
                </div> 
            </div>
        </div>

    );
}

export default Register;