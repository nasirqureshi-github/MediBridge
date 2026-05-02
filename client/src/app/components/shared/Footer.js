"use client";

import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-950 to-blue-900 text-white pt-12 mt-20">

      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-10 pb-10">

        {/* 1. Brand Section */}
        <div>
          <h2 className="text-2xl font-bold">MediBridge</h2>
          <p className="text-sm text-gray-300 mt-3">
            Bridging Patients with Trusted Doctors.  
            MediBridge is your trusted platform to connect with verified doctors and manage your healthcare journey seamlessly.
          </p>

          {/* Social Icons */}
          <div className="flex gap-3 mt-5">
            <div className="p-2 bg-white/10 rounded-full hover:bg-blue-600 cursor-pointer">
              <FaFacebookF />
            </div>
            <div className="p-2 bg-white/10 rounded-full hover:bg-blue-600 cursor-pointer">
              <FaTwitter />
            </div>
            <div className="p-2 bg-white/10 rounded-full hover:bg-blue-600 cursor-pointer">
              <FaInstagram />
            </div>
            <div className="p-2 bg-white/10 rounded-full hover:bg-blue-600 cursor-pointer">
              <FaLinkedinIn />
            </div>
          </div>
        </div>

        {/* 2. Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/find-doctor">Find Doctors</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/how-it-works">How It Works</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* 3. For Patients */}
        <div>
          <h3 className="text-lg font-semibold mb-4">For Patients</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Search Doctors</li>
            <li>Book Appointment</li>
            <li>My Appointments</li>
            <li>Health Articles</li>
            <li>FAQs</li>
          </ul>
        </div>

        {/* 4. Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
          <p className="text-gray-300 text-sm mb-3">
            Subscribe to get health tips and updates.
          </p>

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-2 rounded-md text-black outline-none"
          />

          <button className="w-full mt-3 bg-blue-600 hover:bg-blue-700 py-2 rounded-md font-semibold">
            Subscribe
          </button>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20 py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between text-sm text-gray-300 gap-2">

         <p>
        © {new Date().getFullYear()} MediBridge. All rights reserved.
       </p>

          <div className="flex gap-4">
            <Link href="/privacy">Privacy Policy</Link>
            <span>|</span>
            <Link href="/terms">Terms of Service</Link>
            <span>|</span>
            <Link href="/contact">Contact Us</Link>
          </div>

        </div>
      </div>

    </footer>
  );
};

export default Footer;