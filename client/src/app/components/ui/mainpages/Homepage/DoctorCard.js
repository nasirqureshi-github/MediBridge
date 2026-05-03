"use client";

const DoctorCard = ({ doctor }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 min-w-[250px]">
      <div className="relative">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="w-full h-40 object-cover rounded-lg"
        />
        <span className="absolute top-2 right-2 bg-green-100 text-green-600 text-xs px-2 py-1 rounded-full">
          Verified
        </span>
      </div>

      <h3 className="mt-3 font-semibold text-gray-800">{doctor.name}</h3>
      <p className="text-gray-500 text-sm">{doctor.specialty}</p>

      <p className="text-yellow-500 text-sm mt-1">
        ⭐ {doctor.rating} ({doctor.reviews} reviews)
      </p>

      <p className="text-gray-400 text-sm">{doctor.experience} Years Exp.</p>

      <button className="mt-3 w-full border border-blue-500 text-blue-600 py-2 rounded-lg hover:bg-blue-50">
        Book Appointment
      </button>
    </div>
  );
};
export default DoctorCard;
