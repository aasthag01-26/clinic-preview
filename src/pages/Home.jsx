import React, { useState } from "react";
import Hero from "../components/Hero";
import Treatments from "../components/Treatments";
import AppointmentModal from "../components/AppointmentModal";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const handleEnquire = (serviceName) => {
    setSelectedService(serviceName);
    setModalOpen(true);
  };

  return (
    <>
      {/* Hero Section */}
      <Hero onOpenBooking={handleEnquire} />

      {/* Treatments Section */}
      <Treatments onEnquire={handleEnquire} />

      {/* Doctor Bio Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Meet Our Specialist
          </h2>
          <div className="flex flex-col items-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Doctor"
              className="w-40 h-40 rounded-full shadow-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-700">
              Dr. Priya Sharma
            </h3>
            <p className="text-gray-500">
              MD Dermatology | 10+ Years Experience
            </p>
            <p className="max-w-2xl mt-4 text-gray-600">
              Dr. Sharma is a renowned dermatologist with expertise in advanced
              skin treatments. Her personalized approach ensures that every
              patient feels confident and radiant.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-10">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-md">
              <p className="text-gray-600 italic">
                "Glowshine Clinic completely transformed my skin. The staff is
                so caring and professional!"
              </p>
              <div className="mt-4">⭐⭐⭐⭐⭐</div>
              <h4 className="font-semibold text-gray-700 mt-2">
                — Aditi, New Delhi
              </h4>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-md">
              <p className="text-gray-600 italic">
                "I had laser hair reduction and the results are amazing. Highly
                recommend this clinic!"
              </p>
              <div className="mt-4">⭐⭐⭐⭐⭐</div>
              <h4 className="font-semibold text-gray-700 mt-2">
                — Neha, Gurgaon
              </h4>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-md">
              <p className="text-gray-600 italic">
                "The chemical peel treatment was gentle yet effective. My skin
                feels so fresh!"
              </p>
              <div className="mt-4">⭐⭐⭐⭐☆</div>
              <h4 className="font-semibold text-gray-700 mt-2">
                — Riya, Noida
              </h4>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment Modal */}
      <AppointmentModal
        open={modalOpen}
        selectedService={selectedService}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}
