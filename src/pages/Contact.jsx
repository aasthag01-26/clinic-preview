// src/pages/Contact.jsx
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSending, setIsSending] = useState(false);
  const [statusMsg, setStatusMsg] = useState("");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatusMsg("");

    try {
      const res = await fetch("https://formspree.io/f/mnqkljvz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatusMsg("✅ Thank you! Your message has been sent.");
        setFormData({ name: "", email: "", message: "" });
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
    <section className="bg-[#FFF5EF] py-12 md:py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
          Contact Us
        </h2>

        <p className="text-base md:text-lg text-gray-600 mb-10 leading-relaxed">
          Have questions? We’d love to hear from you! Reach us directly or connect with us on social media.
        </p>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-4 bg-white p-6 rounded-2xl shadow-lg"
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-black outline-none"
            placeholder="Your Name"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-black outline-none"
            placeholder="Your Email"
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            required
            className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-black outline-none"
            placeholder="Your Message"
          />

          <button
            type="submit"
            disabled={isSending}
            className={`w-full px-6 py-3 rounded-xl text-white font-semibold transition ${
              isSending
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-black hover:bg-gray-800"
            }`}
          >
            {isSending ? "Sending..." : "Send Message"}
          </button>
        </form>

        {statusMsg && (
          <p className="mt-4 text-center font-medium">{statusMsg}</p>
        )}

        {/* Map */}
        <div className="mt-12">
          <h3 className="text-lg font-semibold mb-2">Find Us</h3>
          <iframe
            title="Rupayna Skincare Location"
            src="https://www.google.com/maps/embed?pb=!1m18!...your-embed-code..."
            style={{ width: "100%", height: "350px", border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-xl shadow-md"
          />
        </div>

        {/* Contact Info */}
        <div className="space-y-4 mt-6">
          <p className="text-lg font-semibold text-gray-700">
            📞 Call:{" "}
            <a href="tel:+919205661676" className="text-black hover:underline">
              +91-9205661676
            </a>
          </p>
          <p className="text-lg font-semibold text-gray-700">
            📍 Location: Delhi, India
          </p>
          <a
            href="https://www.instagram.com/purelyrupayna?igsh=bGYxcm1wZDNtdXRl"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-lg text-gray-700 hover:underline"
          >
            📷 Follow us on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
