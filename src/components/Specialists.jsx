import React from "react";

export default function Specialists() {
  return (
    <section className="bg-gray-50 py-16">
      {/* Narrower container for balance */}
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">
          Meet Our Specialists
        </h2>

        {/* 2-column grid (1 on mobile, 2 on medium+) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Doctor 1 */}
          <div className="bg-white shadow-md rounded-xl p-6">
            <img
              src="/doctor.jpg"
              alt="Dr. Shailesh Kumar"
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold text-gray-700">
              Dr. Shailesh Kumar
            </h3>
            <p className="text-gray-500">
              Facial Aesthetic Surgeon | FAM PMU (USA)
            </p>
            <p className="mt-3 text-gray-600 text-sm">
              Highly skilled in advanced cosmetic and minimally invasive facial procedures.
            </p>
          </div>

          {/* Doctor 2 */}
          <div className="bg-white shadow-md rounded-xl p-6">
            <img
              src="/doctorkanchan.jpg"
              alt="Dr. Kanchan Suthar"
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold text-gray-700">
              Dr. Kanchan Suthar
            </h3>
            <p className="text-gray-500">
              Dermatologist | Aesthetic Specialist
            </p>
            <p className="mt-3 text-gray-600 text-sm">
              Expert in skin health, rejuvenation, and advanced aesthetics.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
