import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { Link } from 'react-router-dom';

function SubscriptionPlans () {
  return (
    <div className="min-h-screen text-primary-100 flex items-center justify-center bg-bg_secondary p-6">
      <Link to='/register' >
        <KeyboardDoubleArrowLeftIcon 
          fontSize='large'
          className='cursor-pointer transition ease-in-out delay-150 hover:-translate-x-1 hover:scale-10 
                        duration-700 text-primary-100 absolute lg:top-20 lg:left-40 md:top-10 md:left-8'
        />
      </Link>
      <div className="max-w-4xl w-full text-center space-y-24">
        <h1 className="text-4xl font-semibold-100 mb-6 text-primary">
          Let's Level Up Your Learning!
        </h1>
        <div className="flex justify-center space-x-10">
          {/* Monthly Plan */}
          <div 
            className={'relative bg-grey h-[500px] rounded-3xl p-6 w-[360px] space-y-6 '+
                    'hover:scale-105 ease-in-out duration-700 shadow'
            }>
            <div className="border-bg_secondary border-b-2 pb-8">
              <h2 className="text-2xl font-semibold text-primary">Monthly</h2>
              <p>
                Students and teachers seeking on-demand access to learning
                resources.
              </p>
            </div>
            <div 
              className="text-4xl font-semibold mb-6 text-primary"
            >
              <span 
                className="text-lg font-normal"
              >
                $
              </span>
                9.99
              <span 
                className="text-lg font-normal"
              >
                /mo
              </span>
            </div>
            <ul className="text-left mb-6 space-y-2">
              <li>
                <TaskAltIcon 
                  className="text-white"
                /> Access to recorded lessons
              </li>
              <li>
                <TaskAltIcon 
                  className="text-white"
                /> 1-on-1 live coaching with tutors
              </li>
              <li>
                <TaskAltIcon 
                  className="text-white"
                /> Access to discussion forums
              </li>
              <li>
                <TaskAltIcon 
                  className="text-white"
                /> Monthly progress tracking
              </li>
            </ul>
            <Link to='/login'>
              <button 
                className={'w-full bg-primary-100 text-xl text-white py-2 rounded-b-3xl '+
                          'hover:bg-primary transition absolute bottom-0 left-0'
                }>
                Choose Monthly Plan
              </button>
            </Link> 
          </div>

          {/* Yearly Plan */}
          <div 
            className={'relative bg-grey h-[520px] rounded-3xl w-[360px] outline outline-4 '+
                      'outline-primary-100 hover:scale-105 ease-in-out duration-700 shadow-200'
            }>
            <div className="px-6 pt-6 space-y-6">
              <div className="border-bg_secondary border-b-2 pb-8">
                <h2 className="text-2xl font-semibold text-primary">Yearly</h2>
                <p>
                  Students and teachers seeking year-round support and resources.
                </p>
              </div> 
              <div 
                className="text-4xl font-semibold mb-6 text-primary"
              >
                <span 
                  className="text-lg font-normal"
                >
                  $
                </span>
                109.99
                <span 
                  className="text-lg font-normal"
                >
                  /mo
                </span>
              </div>
              <ul className="text-left mb-6 space-y-2">
                <li>
                  <TaskAltIcon 
                    className="text-white"
                  /> Everything in Monthly, plus:
                </li>
                <li>
                  <TaskAltIcon 
                    className="text-white"
                  /> Personalized roadmaps
                </li>
                <li>
                  <TaskAltIcon
                    className="text-white"
                  /> Priority booking with tutors
                </li>
                <li>
                  <TaskAltIcon 
                    className="text-white"
                  /> Unlimited access to premium lessons
                </li>
                <li>
                  <TaskAltIcon 
                    className="text-white"
                  /> Personalized communication with instructors
                </li>
              </ul>
            </div>
            <Link to='/login'>
              <button 
                className={'w-full bg-primary-100 text-xl text-white py-2 rounded-b-3xl '+
                  'hover:bg-primary transition absolute bottom-0 left-0'}
              >
                Choose Yearly Plan
              </button>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SubscriptionPlans;
