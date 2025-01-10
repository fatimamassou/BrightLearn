import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import studentImage from '../pictures/student-Demon.jpeg' ;
import teacherImage from '../pictures/Kim-Namjoooon.jpeg' ;
import { Link } from 'react-router-dom';

function Register() {
    const imgStyle = 'lg:w-96 object-cover rounded-custom cursor-pointer transform transition duration-400 hover:scale-105 shadow-200';
    const divImgStyle = 'w-fit text-center lg:space-y-8 md:space-y-14';
    const h2style = 'text-3xl text-primary text-shadow-lg';
    return(
        <div className="home w-full lg:h-screen md:h-screen sm:h-fit lg:px-8 lg:py-12 md:px-28 md:py-8 sm:py-[200px] m-0 flex justify-center relative">
            <div className="lg:space-y-[100px] md:space-y-[120px] sm:space-y-[120px] lg:w-2/5 md:w-full">
                <Link to='/' >
                    <KeyboardDoubleArrowLeftIcon 
                        fontSize='large'
                        className='cursor-pointer transition ease-in-out delay-150 hover:-translate-x-1 hover:scale-10 duration-800 text-primary-100 absolute lg:top-16 lg:left-40 md:top-10 md:left-8'
                    />
                </Link>
                <h1 className="tracking-wide text-center text-primary-100 font-normal text-3xl">Time to choose your path! Are you here to learn or to teach?</h1>
                <div className="grid gap-8 md:grid-cols-2 w-full">
                    <div className={divImgStyle}>
                        <img src={studentImage} alt="imgStudent" className={`${imgStyle} lg:h-72 md:h-[200px] md:w-[240px] `} />
                        <h2 className={h2style}>Student</h2>
                    </div>
                    <div className={divImgStyle}>
                        <img src={teacherImage} alt="imgTeacher" className={`${imgStyle} lg:h-[288px] md:h-[210px] md:w-[250px]`} />
                        <h2 className={h2style}>Teacher</h2>
                    </div>
                </div> 
            </div>
        </div>

    );
}

export default Register;