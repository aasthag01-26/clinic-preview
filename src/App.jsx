// src/App.jsx
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import StickyButtons from "./components/StickyButtons"; 
import BookingModal from "./components/BookingModal";
import StickyContactBar from "./components/StickyContactBar";
// import PhoneButton from "./components/PhoneButton";
// import WhatsAppButton from "./components/WhatsAppButton";
// import AppointmentModal from "./components/AppointmentModal";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  // const openBooking = () => setIsModalOpen(true);
  // const closeBooking = () => setIsModalOpen(false);

  // One function to open the modal, optionally with a service name
  const openBookingModal = (service = "") => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeBookingModal = () => {
    setIsModalOpen(false);
    setSelectedService(""); // Reset service on close
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* <Navbar onOpenBooking={openBooking} /> */}
        <Navbar onOpenBooking={openBookingModal} />


      <main className="flex-grow pt-16">
        <Routes>
          <Route path="/" element={<Home onOpenBooking={openBookingModal} />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services onOpenBooking={openBookingModal} />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
      <StickyButtons />
      <StickyContactBar />
      {/* <PhoneButton />
      <WhatsAppButton /> */}
      
      {/* The ONE modal for the entire app */}
      {/* <BookingModal
        isOpen={isModalOpen}
        onClose={closeBookingModal}
        selectedService={selectedService}
      /> */}

      {isModalOpen && (
          <BookingModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            serviceLabel={selectedService?.label}
            servicePrice={selectedService?.price}
          />
        )}

      
    </div>
  );
}
