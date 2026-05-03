"use client";

import {
  FaUserCheck,
  FaBolt,
  FaHeadset,
  FaLock,
} from "react-icons/fa";

const features = [
  {
    icon: <FaUserCheck />,
    title: "Verified Doctors",
    desc: "All doctors are fully verified and certified professionals.",
  },
  {
    icon: <FaBolt />,
    title: "Fast Booking",
    desc: "Book appointments in just a few clicks without waiting.",
  },
  {
    icon: <FaHeadset />,
    title: "24/7 Support",
    desc: "Our support team is available anytime you need help.",
  },
  {
    icon: <FaLock />,
    title: "Secure System",
    desc: "Your data and medical info are fully encrypted & safe.",
  },
];

const WhyChooseUs = () => {
  return (
    <div className="max-w-6xl mx-auto mt-24 px-4">
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
          Why Choose <span className="text-blue-600">MediBridge</span>
        </h2>
        <p className="text-gray-500 text-lg md:text-xl mt-3">
          Trusted healthcare platform built for patients & doctors
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-xl transition"
          >
            <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 text-2xl">
              {item.icon}
            </div>

            <h3 className="text-xl font-bold text-gray-800 mb-2">
              {item.title}
            </h3>

            <p className="text-gray-600 text-base">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;