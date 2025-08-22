// src/App.jsx
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PhoneButton from "./components/PhoneButton";
import WhatsAppButton from "./components/WhatsAppButton";
import AppointmentModal from "./components/AppointmentModal";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openBooking = () => setIsModalOpen(true);
  const closeBooking = () => setIsModalOpen(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar onOpenBooking={openBooking} />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home onOpenBooking={openBooking} />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact onOpenBooking={openBooking} />} />
        </Routes>
      </main>

      <Footer />
      <PhoneButton />
      <WhatsAppButton />
      {isModalOpen && (
        <AppointmentModal open={isModalOpen} onClose={closeBooking} />
      )}
    </div>
  );
}
