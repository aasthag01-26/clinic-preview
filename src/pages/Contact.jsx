import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSending, setIsSending] = useState(false);
  const [statusMsg, setStatusMsg] = useState("");

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatusMsg("");

    try {
      const res = await fetch("https://formspree.io/f/XXXXXXXX", { // ← your Formspree contact URL
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatusMsg("✅ Thank you! Your message has been sent.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatusMsg("❌ Something went wrong. Try again.");
      }
    } catch (err) {
      setStatusMsg("❌ Network error. Try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="max-w-3xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="name" value={formData.name} onChange={handleChange} required className="w-full p-3 border rounded-xl" placeholder="Your Name" />
        <input name="email" type="email" value={formData.email} onChange={handleChange} required className="w-full p-3 border rounded-xl" placeholder="Your Email" />
        <textarea name="message" value={formData.message} onChange={handleChange} rows="4" required className="w-full p-3 border rounded-xl" placeholder="Your Message" />
        <button type="submit" disabled={isSending} className="bg-black text-white px-6 py-3 rounded-xl">
          {isSending ? "Sending..." : "Send Message"}
        </button>
      </form>

      {statusMsg && <p className="mt-4">{statusMsg}</p>}

      {/* MAP — replace src with the embed HTML you copied from Google Maps */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-2">Find us</h3>
        {/* Paste your Google Maps iframe here */}
        <iframe
          title="Rupayna Skincare Location"
          src="https://www.google.com/maps/embed?pb=!1m18!...(your embed code here)..."
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}
