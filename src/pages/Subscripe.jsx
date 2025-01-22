import React from "react";
import TaskAltIcon from '@mui/icons-material/TaskAlt';

function SubscriptionPlans () {
  return (
    <div className="min-h-screen text-primary-100 flex items-center justify-center bg-bg_secondary p-6">
      <div className="max-w-4xl w-full text-center space-y-24">
        <h1 className="text-4xl font-semibold-100 mb-6 text-primary">
          Let's Level Up Your Learning!
        </h1>
        <div className="flex justify-center space-x-6">
          {/* Monthly Plan */}
          <div className="relative bg-grey h-[500px] shadow-md rounded-3xl p-6 w-[360px] space-y-6  ">
          <div className="border-bg_secondary border-b-2 pb-8">
            <h2 className="text-2xl font-semibold text-primary">Monthly</h2>
              <p>
                Students and teachers seeking on-demand access to learning
                resources.
              </p>
           </div>
            <div className="text-4xl font-semibold mb-6 text-primary"><span className="text-lg font-normal">$</span>9.99<span className="text-lg font-normal">/mo</span></div>
            <ul className="text-left mb-6 space-y-2">
              <li><TaskAltIcon className="text-white"/> Access to recorded lessons</li>
              <li><TaskAltIcon className="text-white"/> 1-on-1 live coaching with tutors</li>
              <li><TaskAltIcon className="text-white"/> Access to discussion forums</li>
              <li><TaskAltIcon className="text-white"/> Monthly progress tracking</li>
            </ul>
            <button className="w-full bg-primary-100 text-xl text-white py-2 rounded-b-3xl hover:bg-purple-700 transition absolute bottom-0 left-0 ">
              Choose Monthly Plan
            </button>
          </div>

          {/* Yearly Plan */}
          <div className="relative bg-grey h-[520px] shadow-md rounded-3xl w-[360px] border">
            <div className="px-6 pt-6 space-y-6">
             <div className="border-bg_secondary border-b-2 pb-8">
              <h2 className="text-2xl font-semibold text-primary">Yearly</h2>
                <p>
                  Students and teachers seeking year-round support and resources.
                </p>
             </div> 
              <div className="text-4xl font-semibold mb-6 text-primary"><span className="text-lg font-normal">$</span>109.99<span className="text-lg font-normal">/mo</span></div>
              <ul className="text-left mb-6 space-y-2">
                <li><TaskAltIcon className="text-white"/> Everything in Monthly, plus:</li>
                <li><TaskAltIcon className="text-white"/> Personalized roadmaps</li>
                <li><TaskAltIcon className="text-white"/> Priority booking with tutors</li>
                <li><TaskAltIcon className="text-white"/> Unlimited access to premium lessons</li>
                <li><TaskAltIcon className="text-white"/> Personalized communication with instructors</li>
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
