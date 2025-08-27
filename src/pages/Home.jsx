// src/pages/Home.jsx
import React, { useState } from "react";
import Hero from "../components/Hero";
import Treatments from "../components/Treatments";
import Specialists from "../components/Specialists";
import Testimonials from "../components/Testimonials";
import BookingModal from "../components/BookingModal";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const handleEnquire = (serviceName) => {
    setSelectedService(serviceName);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedService("");
  };

  return (
    <>
      {/* Hero Section */}
      <Hero onOpenBooking={() => handleEnquire("")} />

      {/* Treatments Section */}
      <Treatments onEnquire={handleEnquire} />

      {/* Other Sections */}
      <Specialists />
      <Testimonials />

      {/* Appointment Modal */}
      {modalOpen && (
        <BookingModal
          isOpen={modalOpen}
          onClose={handleCloseModal}
          selectedService={selectedService}
        />
      )}
    </>
  );
}
