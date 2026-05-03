"use client";

import { FaStar } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Ali Raza",
    role: "Patient",
    review:
      "Very smooth booking system. I found a doctor within minutes and got instant consultation.",
    rating: 5,
  },
  {
    name: "Sara Khan",
    role: "Patient",
    review:
      "MediBridge made healthcare so easy. The doctors are professional and supportive.",
    rating: 5,
  },
  {
    name: "Dr. Ahmed",
    role: "Doctor",
    review:
      "Great platform to manage appointments and connect with patients efficiently.",
    rating: 4,
  },
  {
    name: "Usman Ali",
    role: "Patient",
    review:
      "Highly recommended platform. Booking doctors has never been this easy.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <div className="max-w-6xl mx-auto mt-24 px-4">
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
          What Our <span className="text-blue-600">Users Say</span>
        </h2>
        <p className="text-gray-500 text-lg md:text-xl mt-3">
          Real feedback from patients and doctors
        </p>
      </div>

      {/* Swiper */}
      <div className="pb-14">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="h-full bg-white shadow-md hover:shadow-lg transition rounded-xl p-7 flex flex-col justify-between min-h-[260px]">
                
                {/* Stars */}
                <div className="flex mb-3 text-yellow-400">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>

                {/* Review */}
                <p className="text-gray-600 flex-1 text-base leading-relaxed">
                  "{item.review}"
                </p>

                {/* User */}
                <div className="mt-6">
                  <h4 className="font-bold text-gray-800">{item.name}</h4>
                  <p className="text-sm text-gray-500">{item.role}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* extra space between cards and dots handled by padding-bottom */}
      </div>

      {/* Custom spacing for dots */}
      <style jsx>{`
        :global(.swiper-pagination) {
          margin-top: 25px;
          position: relative;
        }
      `}</style>
    </div>
  );
};

export default Testimonials;