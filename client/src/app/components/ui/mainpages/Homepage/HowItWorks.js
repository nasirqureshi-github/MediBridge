
"use client";

import {
  FaUserPlus,
  FaSearch,
  FaCalendarCheck,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaUserPlus />,
    title: "Create Account",
    desc: "Sign up as a patient or doctor in just a few clicks.",
  },
  {
    icon: <FaSearch />,
    title: "Find a Doctor",
    desc: "Search and choose from our verified doctors.",
  },
  {
    icon: <FaCalendarCheck />,
    title: "Book Appointment",
    desc: "Pick a time slot that works best for you.",
  },
  {
    icon: <FaCheckCircle />,
    title: "Get Consultation",
    desc: "Meet your doctor and get the best treatment.",
  },
];

const HowItWorks = () => {
  return (
    <div className="max-w-6xl mx-auto mt-20 px-4">
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
          How <span className="text-blue-600">MediBridge</span> Works
        </h2>
        <p className="text-gray-500 text-xl md:text-2xl mt-3">
          Healthcare made simple in just a few steps
        </p>
      </div>

      {/* Steps */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center w-full">
            {/* Card */}
            <div className="bg-white shadow-lg rounded-xl p-8 text-center w-full hover:shadow-xl transition">
              <div className="w-16 h-16 mx-auto mb-5 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 text-2xl">
                {step.icon}
              </div>

              <h3 className="font-bold text-xl text-gray-800 mb-2">
                {index + 1}. {step.title}
              </h3>

              <p className="text-gray-600 text-base md:text-lg">
                {step.desc}
              </p>
            </div>

            {/* Arrow (hide on last item + mobile) */}
            {index !== steps.length - 1 && (
              <div className="hidden md:flex items-center justify-center px-3 text-blue-500 text-2xl">
                <FaArrowRight />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;