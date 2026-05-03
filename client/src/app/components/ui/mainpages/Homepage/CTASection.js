
"use client";

import Image from "next/image";

const CTASection = () => {
  return (
    <div className="max-w-6xl mx-auto mt-20 md:mt-50 px-4">
      
      <div className="relative bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl px-6 md:px-12 py-12 flex items-center justify-end text-white">
        <div className="absolute hidden md:block left-10 md:left-16 -top-24 z-20">
          <Image
            src="/images/d-phone.png"
            alt="Mobile App"
            width={220}
            height={300}
            className="drop-shadow-2xl "
          />
        </div>

        {/* CONTENT */}
        <div className="w-full md:w-2/3 ml-auto text-center md:text-left">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Take Control of Your Health Today
          </h2>

          <p className="text-blue-100 text-sm md:text-lg mb-8 max-w-xl">
            Join thousands of patients who trust MediBridge for their healthcare needs.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium shadow hover:bg-gray-100 transition">
              Find a Doctor
            </button>

            <button className="border border-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition">
              Join as Doctor
            </button>
          </div>
        </div>

        {/* LIGHT CIRCLE EFFECT */}
        <div className="absolute right-10 top-10 w-10 h-10 bg-white/10 rounded-full"></div>

      </div>
    </div>
  );
};

export default CTASection;