import React from "react";
import TaskAltIcon from '@mui/icons-material/TaskAlt';

function SubscriptionPlans () {
  return (
    <div className="min-h-screen text-primary flex items-center justify-center bg-bg_secondary p-6">
      <div className="max-w-4xl w-full text-center space-y-24">
        <h1 className="text-4xl font-semibold-100 mb-6">
          Let's Level Up Your Learning!
        </h1>
        <div className="flex justify-center space-x-6">
          {/* Monthly Plan */}
          <div className="relative bg-grey h-[500px] shadow-md rounded-3xl p-6 w-[360px] space-y-14">
           <div className="">
            <h2 className="text-2xl font-semibold mb-4">Monthly</h2>
              <p className="mb-4">
                Students and teachers seeking on-demand access to learning
                resources.
              </p>
           </div>
            <div className="text-4xl font-semibold mb-6"><span className="text-lg font-normal">$</span>9.99<span className="text-lg font-normal">/mo</span></div>
            <ul className="text-left mb-6 space-y-2">
              <li><TaskAltIcon /> Access to recorded lessons</li>
              <li><TaskAltIcon /> 1-on-1 live coaching with tutors</li>
              <li><TaskAltIcon /> Access to discussion forums</li>
              <li><TaskAltIcon /> Monthly progress tracking</li>
            </ul>
            <button className="w-full bg-primary-100 text-xl text-white py-2 rounded-b-3xl hover:bg-purple-700 transition absolute bottom-0 left-0 ">
              Choose Monthly Plan
            </button>
          </div>

          {/* Yearly Plan */}
          <div className="relative bg-grey h-[520px] shadow-md rounded-3xl w-[360px]">
            <div className="px-6 pt-6 space-y-10">
             <div className="">
              <h2 className="text-2xl font-semibold mb-4">Yearly</h2>
                <p className="mb-4">
                  Students and teachers seeking year-round support and resources.
                </p>
             </div> 
              <div className="text-4xl font-semibold mb-6"><span className="text-lg font-normal">$</span>109.99<span className="text-lg font-normal">/mo</span></div>
              <ul className="text-left mb-6 space-y-2">
                <li><TaskAltIcon /> Everything in Monthly, plus:</li>
                <li><TaskAltIcon /> Personalized roadmaps</li>
                <li><TaskAltIcon /> Priority booking with tutors</li>
                <li><TaskAltIcon /> Unlimited access to premium lessons</li>
                <li><TaskAltIcon /> Personalized communication with instructors</li>
              </ul>
            </div>
            <button className="w-full bg-primary-100 text-xl text-white py-2 rounded-b-3xl hover:bg-purple-700 transition absolute bottom-0 left-0 ">
              Choose Yearly Plan
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SubscriptionPlans;
