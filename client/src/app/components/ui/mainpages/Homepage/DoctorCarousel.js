"use client";

import { useRef } from "react";
import DoctorCard from "./DoctorCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "swiper/css";

const doctors = [
  {
    name: "Dr. Ali Raza",
    specialty: "Cardiologist",
    rating: 4.9,
    reviews: 120,
    experience: 10,
    image: "/images/doctor-1.jpg",
  },
  {
    name: "Dr. Sara Ahmed",
    specialty: "Dermatologist",
    rating: 4.8,
    reviews: 98,
    experience: 8,
    image: "/images/doctor-2.jpg",
  },
  {
    name: "Dr. Ayesha Malik",
    specialty: "Gynecologist",
    rating: 4.9,
    reviews: 150,
    experience: 12,
    image: "/images/doctor-3.jpg",
  },
  {
    name: "Dr. Usman Khan",
    specialty: "Neurologist",
    rating: 4.8,
    reviews: 110,
    experience: 9,
    image: "/images/doctor-4.jpg",
  },
  {
    name: "Dr. Kinza Rashid",
    specialty: "Surgeon",
    rating: 4.9,
    reviews: 111,
    experience: 9,
    image: "/images/doctor-5.jpg",
  },
  {
    name: "Dr. Ahamd Khan",
    specialty: "Surgeon",
    rating: 4.8,
    reviews: 110,
    experience: 9,
    image: "/images/doctor-6.jpg",
  },
];

const DoctorCarousel = () => {
  const swiperRef = useRef(null);

  return (
    <div className="max-w-6xl mx-auto mt-10 relative">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-800">
          Top Rated Doctors
        </h2>
        <button className="text-blue-600 text-sm font-medium">
          View all doctors →
        </button>
      </div>

      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className="hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md hover:shadow-lg transition w-10 h-10 rounded-full items-center justify-center hover:scale-110 cursor-pointer"
      >
        <FaChevronLeft className="text-blue-600 text-sm" />
      </button>

      <button
        onClick={() => swiperRef.current?.slideNext()}
        className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md hover:shadow-lg transition w-10 h-10 rounded-full items-center justify-center hover:scale-110 cursor-pointer"
      >
        <FaChevronRight className="text-blue-600 text-sm" />
      </button>

      <Swiper
        modules={[Navigation]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {doctors.map((doc, index) => (
          <SwiperSlide key={index}>
            <DoctorCard doctor={doc} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default DoctorCarousel;