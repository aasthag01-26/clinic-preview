// src/components/Treatments.jsx
import React from "react";
import { Link } from "react-router-dom";

const treatments = [
  {
    title: "Laser Hair Reduction",
    description: "Safe, effective laser sessions for long-term hair reduction.",
    image: "/images/laser-hair-reduction.jpg",
  },
  {
    title: "Skin Rejuvenation",
    description: "Restore youth & glow with advanced rejuvenating therapies.",
    image: "/images/skin-rejuvenation.jpg",
  },
  {
    title: "Chemical Peels",
    description: "Brighten skin and reduce marks with customized peels.",
    image: "/images/chemical-peels.jpg",
  },
];

export default function Treatments({ onEnquire }) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">
          Our Premier Treatments
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {treatments.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md">
              <img
                src={item.image}
                alt={item.title}
                className="rounded-md mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-700">
                {item.title}
              </h3>
              <p className="text-gray-600 mt-2">{item.description}</p>
              
              <button
                onClick={() => onEnquire(item.title)}
                className="text-teal-600 font-medium mt-4 inline-block"
              >
              Enquire →
             </button>


            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
