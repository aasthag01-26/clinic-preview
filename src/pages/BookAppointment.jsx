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
  const [isSending, setIsSending] = useState(false);
  const [statusMsg, setStatusMsg] = useState("");

  // Prefill service from ?service= query param
  useEffect(() => {
    const serviceFromUrl = searchParams.get("service");
    if (serviceFromUrl) {
      setFormData((prev) => ({ ...prev, service: serviceFromUrl }));
    }
  }, [searchParams]);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatusMsg("");

    try {
      const res = await fetch("https://formspree.io/f/XXXXXXXX", {
        // 👈 replace XXXXXXXX with your Formspree form ID
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatusMsg("✅ Thank you! We’ll contact you soon.");
        setFormData({ name: "", email: "", phone: "", service: "", message: "" });
      } else {
        setStatusMsg("❌ Something went wrong. Please try again.");
      }
    } catch (err) {
      setStatusMsg("❌ Network error. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="bg-gray-50 py-12 md:py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
          Book Your Appointment
        </h1>

        <p className="text-base md:text-lg text-gray-600 mb-10 leading-relaxed">
          Ready to glow? Fill out the form below, and our team will get in touch with you within 24 hours to confirm your booking.
        </p>

        <form onSubmit={handleSubmit} className="grid gap-4 md:gap-6 bg-white p-6 rounded-2xl shadow-lg">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-xl border focus:ring-2 focus:ring-black outline-none"
          />
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-black outline-none"
          />
          <input
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-xl border focus:ring-2 focus:ring-black outline-none"
          />
          <input
            name="service"
            placeholder="Service"
            value={formData.service}
            onChange={handleChange}
            className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-black outline-none"
          />
          <textarea
            name="message"
            placeholder="Your Message (Optional)"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full p-3 rounded-xl border focus:ring-2 focus:ring-black outline-none"
          />
          <button
            type="submit"
            disabled={isSending}
            className={`w-full py-3 rounded-xl text-white font-semibold transition ${
              isSending ? "bg-gray-400 cursor-not-allowed" : "bg-black hover:bg-gray-800"
            }`}
          >
            {isSending ? "Booking..." : "Confirm Booking"}
          </button>
        </form>

        {statusMsg && <p className="mt-4 text-center font-medium">{statusMsg}</p>}
      </div>
    </section>
  );
}
