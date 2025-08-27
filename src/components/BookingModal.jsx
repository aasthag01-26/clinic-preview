// src/components/BookingModal.jsx
import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import formatRupee from "./FormatRupee";

export default function BookingModal({ isOpen, onClose, prefillService }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const firstInputRef = useRef(null);

  // choose env access depending on your bundler
  const SERVICE_ID =
    process.env.REACT_APP_EMAILJS_SERVICE_ID ||
    (import.meta?.env?.VITE_EMAILJS_SERVICE_ID ?? "YOUR_SERVICE_ID");
  const TEMPLATE_ID =
    process.env.REACT_APP_EMAILJS_TEMPLATE_ID ||
    (import.meta?.env?.VITE_EMAILJS_TEMPLATE_ID ?? "YOUR_TEMPLATE_ID");
  const PUBLIC_KEY =
    process.env.REACT_APP_EMAILJS_PUBLIC_KEY ||
    (import.meta?.env?.VITE_EMAILJS_PUBLIC_KEY ?? "YOUR_PUBLIC_KEY");

  useEffect(() => {
    if (isOpen) setTimeout(() => firstInputRef.current?.focus(), 50);
  }, [isOpen]);

  if (!isOpen) return null;

  const serviceLabel = prefillService?.variantName
    ? `${prefillService.name} — ${prefillService.variantName}`
    : `${prefillService?.name || ""}`;
  const servicePrice = prefillService?.price ?? prefillService?.price ?? "";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim() || !formData.email.trim()) {
      alert("Please enter name, phone & email.");
      return;
    }
    setIsSending(true);
    setSuccessMsg("");

    // timestamp (India timezone)
    const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

    const templateParams = {
      service_name: serviceLabel,
      service_price: servicePrice,
      client_name: formData.name,
      client_phone: formData.phone,
      client_email: formData.email,
      message: formData.message || "—",
      timestamp,
    };

    console.log("Booking → sending templateParams:", templateParams);
    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      setSuccessMsg("✅ Thank you! Your booking request has been sent.");
      setFormData({ name: "", phone: "", email: "", message: "" });

      // close after short delay so user sees message
      setTimeout(() => {
        setSuccessMsg("");
        onClose();
      }, 1400);
    } catch (err) {
      console.error("EmailJS send error:", err);
      // helpful message: check console & EmailJS logs
      alert(
        "Something went wrong sending the booking. Check console & your EmailJS keys/template. If you recently updated .env, restart dev server."
      );
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">
      <div className="bg-white p-6 rounded-2xl max-w-md w-full shadow-lg">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h2 className="text-xl font-bold">Book / Enquire</h2>
            <p className="text-sm text-gray-600">Confirm service below and submit.</p>
          </div>
          <button onClick={onClose} className="text-gray-500">✕</button>
        </div>

        <div className="mb-4 p-3 rounded-lg bg-gray-50 border">
          <div className="text-sm text-gray-700 font-medium">You are booking:</div>
          <div className="mt-1 text-gray-900">{serviceLabel || "—"}</div>
          <div className="text-sm text-gray-700">{servicePrice ? formatRupee(servicePrice) : ""}</div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input ref={firstInputRef} name="name" placeholder="Your Name" className="w-full border rounded-lg p-2" value={formData.name} onChange={handleChange} required />
          <input name="phone" placeholder="Phone Number" className="w-full border rounded-lg p-2" value={formData.phone} onChange={handleChange} required />
          <input name="email" type="email" placeholder="Email" className="w-full border rounded-lg p-2" value={formData.email} onChange={handleChange} required />

          <input name="service" type="text" className="w-full border rounded-lg p-2 bg-gray-100" value={`${serviceLabel}${servicePrice ? ` — ${formatRupee(servicePrice)}` : ""}`} readOnly />

          <textarea name="message" placeholder="Message (optional)" className="w-full border rounded-lg p-2" value={formData.message} onChange={handleChange} />

          <div className="flex gap-3">
            <button type="submit" disabled={isSending} className={`flex-1 py-2 rounded-lg text-white ${isSending ? "bg-gray-400" : "bg-black hover:bg-gray-800"}`}>
              {isSending ? "Sending..." : "Confirm Booking"}
            </button>
            <button type="button" onClick={onClose} className="flex-1 py-2 rounded-lg border">Cancel</button>
          </div>
        </form>

        {successMsg && <div className="mt-4 text-green-600">{successMsg}</div>}
      </div>
    </div>
  );
}
