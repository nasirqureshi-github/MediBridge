"use client";

import { FaUsers, FaUserMd, FaCalendarCheck, FaShieldAlt } from "react-icons/fa";

const stats = [
  {
    icon: <FaUsers />,
    value: "50K+",
    label: "Happy Patients",
  },
  {
    icon: <FaUserMd />,
    value: "1,200+",
    label: "Verified Doctors",
  },
  {
    icon: <FaCalendarCheck />,
    value: "25K+",
    label: "Appointments",
  },
  {
    icon: <FaShieldAlt />,
    value: "99.9%",
    label: "Satisfaction Rate",
  },
];

const StatsSection =()=> {
  return (
    <div className="max-w-6xl mx-auto bg-yellow-50 rounded-2xl p-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center mt-10">
      {stats.map((item, index) => (
        <div key={index} className="flex flex-col items-center gap-2">
          <div className="text-blue-600 text-2xl">{item.icon}</div>
          <h2 className="text-xl font-bold text-gray-800">{item.value}</h2>
          <p className="text-gray-500 text-sm">{item.label}</p>
        </div>
      ))}
    </div>
  );
}

export default StatsSection;