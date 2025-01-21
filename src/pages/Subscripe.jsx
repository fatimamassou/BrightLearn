import React from "react";
import TaskAltIcon from '@mui/icons-material/TaskAlt';

function SubscriptionPlans () {
  return (
    <div className="min-h-screen flex items-center justify-center bg-bg_secondary p-6">
      <div className="max-w-4xl w-full text-center space-y-24">
        <h1 className="text-4xl font-semibold text-primary-100 mb-6">
          Let's Level Up Your Learning!
        </h1>
        <div className="flex justify-center space-x-6">
          {/* Monthly Plan */}
          <div className="bg-grey h-4/6 shadow-md rounded-lg p-6 border-t-4 border-purple-600 w-[380px]">
            <h2 className="text-2xl text-primary font-semibold mb-4">Monthly</h2>
            <p className="text-gray-600 mb-4">
              Students and teachers seeking on-demand access to learning
              resources.
            </p>
            <div className="text-4xl font-bold text-gray-800 mb-6">$9.99</div>
            <ul className="text-left text-gray-600 mb-6 space-y-2">
              <li><TaskAltIcon /> Access to recorded lessons</li>
              <li><TaskAltIcon /> 1-on-1 live coaching with tutors</li>
              <li><TaskAltIcon /> Access to discussion forums</li>
              <li><TaskAltIcon /> Monthly progress tracking</li>
            </ul>
            <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition">
              Choose Monthly Plan
            </button>
          </div>

          {/* Yearly Plan */}
          <div className="bg-grey h-4/6 shadow-md rounded-lg p-6 border-t-4 border-purple-600 w-[400px]">
            <h2 className="text-2xl text-primary font-semibold mb-4">Yearly</h2>
            <p className="text-gray-600 mb-4">
              Students and teachers seeking year-round support and resources.
            </p>
            <div className="text-4xl font-bold text-gray-800 mb-6">$109.99</div>
            <ul className="text-left text-gray-600 mb-6 space-y-2">
              <li><TaskAltIcon /> Everything in Monthly, plus:</li>
              <li><TaskAltIcon /> Personalized roadmaps</li>
              <li><TaskAltIcon /> Priority booking with tutors</li>
              <li><TaskAltIcon /> Unlimited access to premium lessons</li>
              <li><TaskAltIcon /> Personalized communication with instructors</li>
            </ul>
            <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition">
              Choose Yearly Plan
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SubscriptionPlans;
