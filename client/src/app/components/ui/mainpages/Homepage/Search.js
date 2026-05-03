"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FiSearch } from "react-icons/fi";

const HeroSearch = () => {
  const router = useRouter();

  const [query, setQuery] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = () => {
    router.push(
      `/find-doctor?query=${query}&specialty=${specialty}&location=${location}`
    );
  };

  return (
    <div className="z-20 max-w-6xl mx-auto bg-white shadow-xl rounded-2xl p-4 relative">
      <h1 className="text-2xl font-bold text-gray-800 mb-3">Find the right doctor for you</h1>
      <div className="flex flex-col md:flex-row gap-3 items-center">
      <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 w-full md:w-1/3 bg-white">
        <FiSearch className="text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Search doctor..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full outline-none text-gray-800 placeholder-gray-500 bg-transparent"
        />
      </div>

      <select
        value={specialty}
        onChange={(e) => setSpecialty(e.target.value)}
        className="w-full md:w-1/4 px-4 py-2 border border-gray-300 rounded-lg text-gray-800 bg-white outline-none"
      >
        <option value="">Select Specialty</option>
        <option value="cardiologist">Cardiologist</option>
        <option value="dentist">Dentist</option>
        <option value="dermatologist">Dermatologist</option>
        <option value="neurologist">Neurologist</option>
      </select>

      <select
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="w-full md:w-1/4 px-4 py-2 border border-gray-300 rounded-lg text-gray-800 bg-white outline-none"
      >
        <option value="">Select Location</option>
        <option value="lahore">Lahore</option>
        <option value="karachi">Karachi</option>
        <option value="islamabad">Islamabad</option>
      </select>
      <button
        onClick={handleSearch}
        className="w-full md:w-auto bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
      >
        Search
      </button>
      </div>
    </div>
  );
};

export default HeroSearch;