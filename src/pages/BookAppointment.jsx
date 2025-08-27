// src/pages/BookAppointment.jsx
import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function BookAppointment() {
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  // prefill service from ?service= query param
  useEffect(() => {
    const serviceFromUrl = searchParams.get("service");
    if (serviceFromUrl) {
      setFormData((prev) => ({ ...prev, service: serviceFromUrl }));
    }
  }, [searchParams]);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://formspree.io/f/XXXXXXXX", { // replace with your Formspree URL
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        alert("✅ Thank you! We’ll contact you soon.");
        setFormData({ name: "", email: "", phone: "", service: "", message: "" });
      } else {
        alert("❌ Something went wrong. Try again.");
      }
    } catch (err) {
      alert("❌ Network error.");
    }
  };

  return (
    <div className="max-w-xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-6 text-center">Book Your Appointment</h1>
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-2xl shadow-lg">
        <input name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required className="w-full p-3 border rounded-xl" />
        <input name="email" type="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required className="w-full p-3 border rounded-xl" />
        <input name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required className="w-full p-3 border rounded-xl" />
        <input name="service" placeholder="Service" value={formData.service} onChange={handleChange} className="w-full p-3 border rounded-xl" />
        <textarea name="message" placeholder="Message (Optional)" value={formData.message} onChange={handleChange} rows="4" className="w-full p-3 border rounded-xl" />
        <button type="submit" className="bg-pink-600 text-white w-full py-3 rounded-xl hover:bg-pink-700">
          Confirm Booking
        </button>
      </form>
    </div>
  );
}
