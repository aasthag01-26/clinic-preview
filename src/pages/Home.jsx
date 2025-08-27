// src/pages/Home.jsx
import Hero from "../components/Hero";
import Treatments from "../components/Treatments";
import Specialists from "../components/Specialists";
import Testimonials from "../components/Testimonials";

export default function Home({ onOpenBooking }) {
  return (
    <>
      {/* Hero Section */}
      <Hero onOpenBooking={() => onOpenBooking({ label: "General Appointment", price: null })} />

      {/* Treatments Section */}
      <Treatments onEnquire={onOpenBooking} />

      {/* Other Sections */}
      <Specialists />
      <Testimonials />
    </>
  );
}
