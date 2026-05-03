"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 10) {
        setShow(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      if (currentScrollY > lastScrollY.current) {
        setShow(true);
      }

      if (currentScrollY < lastScrollY.current) {
        setShow(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const pathname = usePathname();
  useEffect(() => {
  setOpen(false);
   }, [pathname]);



  const links = [
    { name: "Home", href: "/" },
    { name: "Find Doctors", href: "/find-doctor" },
    { name: "About Us", href: "/about" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "Blog", href: "/blog" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full bg-white/90 backdrop-blur border-b z-50 transition-transform duration-300 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/medibridge.png"
            alt="Logo"
            width={300}
            height={300}
            priority
           className="w-full h-auto" 
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
          {links.map((link) => (
            <Link key={link.name} href={link.href} className="hover:text-blue-600" >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Buttons */}
        <div className="hidden md:flex gap-3">
          <Link href="/login" className="px-4 py-2 border text-black border-gray-500 rounded-lg">
            Login
          </Link>
          <Link href="/register" className="px-4 py-2 bg-blue-600 text-white rounded-lg">
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-blue-600" onClick={() => setOpen(!open)}>
          {open ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-4 pb-4 bg-white text-black">
          {links.map((link) => (
            <Link key={link.name} href={link.href} className="block py-2">
              {link.name}
            </Link>
          ))}

          <div className="mt-3 flex flex-col gap-2">
            <Link href="/login" className="border text-black border-gray-500 p-2 text-center rounded">
              Login
            </Link>
            <Link href="/register" className="bg-blue-600 text-white p-2 text-center rounded">
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;