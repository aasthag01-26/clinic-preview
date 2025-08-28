// src/App.jsx
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import StickyButtons from "./components/StickyButtons";
import ThankYou from "./pages/ThankYou";
import BookingModal from "./components/BookingModal";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  // ✅ Centralized booking modal handler
  const openBookingModal = (service = { label: "General Appointment", price: null }) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeBookingModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar onOpenBooking={openBookingModal} />

      <main className="flex-grow pt-16">
        <Routes>
          <Route path="/" element={<Home onOpenBooking={openBookingModal} />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services onOpenBooking={openBookingModal} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
      </main>

      <Footer />
      <StickyButtons />
      {/* <StickyContactBar /> */}

      {/* ✅ Centralized Booking Modal */}
      <BookingModal
        isOpen={isModalOpen}
        onClose={closeBookingModal}
        selectedService={selectedService}
      />
    </div>
  );
}
