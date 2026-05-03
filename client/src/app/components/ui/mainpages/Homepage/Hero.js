import Image from "next/image";
import Link from "next/link";
import { FaCheckCircle, FaLock, FaClock } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="bg-linear-to-r from-blue-50 to-blue-100 pt-30 md:pt-16 w-full ">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Quality Healthcare,
            <br />
            <span className="text-blue-600">Connected to You</span>
          </h1>

          <p className="mt-4 text-gray-600 text-lg">
            MediBridge connects you with verified doctors, easy appointments,
            and better healthcare — anytime, anywhere.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex gap-4 flex-wrap">
            <Link
              href="/find-doctor"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold"
            >
              Find a Doctor
            </Link>

            <Link
              href="/register"
              className="border border-gray-500 px-6 py-3 rounded-lg text-black font-bold"
            >
              Join as Doctor
            </Link>
          </div>

{/* Features */}
<div className="mt-10 flex flex-wrap gap-4">

  {/* Verified Doctors */}
  <div className="bg-white/70 backdrop-blur-md shadow-md rounded-xl px-4 py-2 border border-gray-200 hover:shadow-lg transition">
    
    <div className="flex items-center gap-3">
      <FaCheckCircle className="text-blue-600 text-lg" />
      <span className="text-gray-700 font-bold text-md">Verified Doctors</span>
    </div>

    <p className="text-gray-700 font-medium text-sm text-center mt-1">
      100% Verified
    </p>
  </div>

  {/* Secure & Private */}
  <div className="bg-white/70 backdrop-blur-md shadow-md rounded-xl px-4 py-2 border border-gray-200 hover:shadow-lg transition">

    <div className="flex items-center gap-3">
      <FaLock className="text-green-600 text-lg" />
      <span className="text-gray-700 font-bold text-md">Secure & Private</span>
    </div>

    <p className="text-gray-700 font-medium text-sm text-center mt-1">
      Your data is safe
    </p>
  </div>

  {/* 24/7 Support */}
  <div className="bg-white/70 backdrop-blur-md shadow-md rounded-xl px-4 py-2 border border-gray-200 hover:shadow-lg transition">

    <div className="flex items-center gap-3">
      <FaClock className="text-purple-600 text-lg" />
      <span className="text-gray-700 font-bold text-md">24/7 Support</span>
    </div>

    <p className="text-gray-700 font-medium text-sm text-center mt-1">
      We are here to help
    </p>
  </div>

</div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          <Image
            src="/images/hero-img.png"
            alt="Doctors"
            width={600}
            height={600}
            className="max-w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;