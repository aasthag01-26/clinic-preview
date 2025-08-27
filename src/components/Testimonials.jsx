import React from "react";

export default function Testimonials() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">
          What Our Clients Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-gray-50 p-6 rounded-xl shadow-md">
            <p className="text-gray-600 italic">
              "Rupayna Skincare completely transformed my skin. The staff is so caring and professional!"
            </p>
            <div className="mt-4">⭐⭐⭐⭐⭐</div>
            <h4 className="font-semibold text-gray-700 mt-2">
              — Aditi, New Delhi
            </h4>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-gray-50 p-6 rounded-xl shadow-md">
            <p className="text-gray-600 italic">
              "I had laser hair reduction and the results are amazing. Highly recommend this clinic!"
            </p>
            <div className="mt-4">⭐⭐⭐⭐⭐</div>
            <h4 className="font-semibold text-gray-700 mt-2">
              — Neha, Gurgaon
            </h4>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-gray-50 p-6 rounded-xl shadow-md">
            <p className="text-gray-600 italic">
              "The chemical peel treatment was gentle yet effective. My skin feels so fresh!"
            </p>
            <div className="mt-4">⭐⭐⭐⭐☆</div>
            <h4 className="font-semibold text-gray-700 mt-2">
              — Riya, Noida
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
}
