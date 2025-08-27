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
        // 👈 replace XXXXXXXX with your Formspree ID
        method: "POST",
        headers: { "Content-Type": "application/json","Accept": "application/json" },
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
    <section className="max-w-3xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded-xl"
          placeholder="Your Name"
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded-xl"
          placeholder="Your Email"
        />

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
          required
          className="w-full p-3 border rounded-xl"
          placeholder="Your Message"
        />

        <button
          type="submit"
          disabled={isSending}
          className={`w-full px-6 py-3 rounded-xl text-white transition ${
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

      {/* MAP — replace src with your Google Maps embed link */}
      <div className="mt-12">
        <h3 className="text-lg font-semibold mb-2">Find Us</h3>
        <iframe
          title="Rupayna Skincare Location"
          src="https://www.google.com/maps/embed?pb=!1m18!...your embed code..."
          style={{ width: "100%", height: "350px", border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}
