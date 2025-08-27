import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const servicesList = [
  "Advanced Facials",
  "Skin Rejuvenation & Polishing",
  "Laser Hair Reduction",
  "Body Contouring",
  "Injectable Treatments",
  "Chemical Peels",
];

const FORMSPREE_ID = "mrbabela"; // replace with your Formspree ID

export default function BookingForm({ onClose, selectedService }) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "General Enquiry",
    date: "",
    preferredTime: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);

  // ✅ Pre-fill service if user clicked "Book Now"
  useEffect(() => {
    if (selectedService) {
      setFormData((prev) => ({
        ...prev,
        service: selectedService.label,
      }));
    }
  }, [selectedService]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        onClose();
        navigate("/thank-you"); // ✅ redirect closes popup automatically
      } else {
        alert("❌ Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("⚠️ Error submitting form. Please check your internet connection.");
    } finally {
      setIsSending(false);
    }
  };

  // ✅ Prevent selecting past dates
  const today = new Date().toISOString().split("T")[0];

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md"
    >
      <h2 className="text-xl font-bold mb-4 text-center">
        Book an Appointment
      </h2>

      {/* Full Name */}
      <label className="block mb-1 font-medium">Full Name</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        className="w-full border p-2 rounded mb-3"
        placeholder="Enter your full name"
        required
      />

      {/* Phone Number */}
      <label className="block mb-1 font-medium">Phone Number</label>
      <input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        pattern="[0-9]{10}"
        maxLength="10"
        className="w-full border p-2 rounded mb-3"
        placeholder="Enter 10-digit phone number"
        required
      />

      {/* Email Address */}
      <label className="block mb-1 font-medium">Email Address</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        className="w-full border p-2 rounded mb-3"
        placeholder="you@example.com"
        required
      />

      {/* Services Dropdown */}
      <label className="block mb-1 font-medium">Select Service</label>
      <select
        name="service"
        value={formData.service}
        onChange={handleChange}
        className="w-full border p-2 rounded mb-3"
        required
      >
        <option value="">Choose a service</option>
        <option value="General Enquiry">General Enquiry</option>
        {servicesList.map((s, i) => (
          <option key={i} value={s}>
            {s}
          </option>
        ))}
        {/* ✅ Ensure pre-filled services (from Book Now) show up */}
        {formData.service &&
          !["General Enquiry", ...servicesList].includes(formData.service) && (
            <option value={formData.service}>{formData.service}</option>
          )}
      </select>

      {/* Preferred Time Slot */}
      <label className="block mb-1 font-medium">Preferred Time Slot</label>
      <select
        name="preferredTime"
        value={formData.preferredTime}
        onChange={handleChange}
        className="w-full border p-2 rounded mb-1"
        required
      >
        <option value="">Choose a time slot</option>
        <option value="Morning">Morning (9am - 12pm)</option>
        <option value="Afternoon">Afternoon (1pm - 4pm)</option>
        <option value="Evening">Evening (4pm - 7pm)</option>
      </select>
      <p className="text-xs text-gray-500 mb-3">
        We’ll call you to confirm the exact appointment time.
      </p>

      {/* Date */}
      <label className="block mb-1 font-medium">Preferred Date</label>
      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        min={today} // ✅ disable past dates
        className="w-full border p-2 rounded mb-3"
        required
      />

      {/* Message / Notes */}
      <label className="block mb-1 font-medium">Message / Notes (Optional)</label>
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        className="w-full border p-2 rounded mb-3"
        placeholder="Any special request or concern?"
        rows="3"
      ></textarea>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSending}
        className={`flex items-center justify-center bg-blue-600 text-white w-full py-2 rounded transition ${
          isSending ? "opacity-70 cursor-not-allowed" : "hover:bg-blue-700"
        }`}
      >
        {isSending ? (
          <>
            {/* Spinner */}
            <svg
              className="animate-spin h-5 w-5 mr-2 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              ></path>
            </svg>
            Sending...
          </>
        ) : (
          "Request an Appointment"
        )}
      </button>

      {/* Cancel Button */}
      <button
        type="button"
        onClick={onClose}
        className="mt-3 text-gray-600 w-full underline hover:text-gray-900 transition"
      >
        Cancel
      </button>
    </form>
  );
}
