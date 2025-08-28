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

  const initialForm = {
    name: "",
    phone: "",
    email: "",
    service: "General Enquiry",
    date: "",
    preferredTime: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);

  // ✅ Pre-fill service if coming from "Book Now"
  useEffect(() => {
    if (selectedService) {
      setFormData((prev) => ({
        ...prev,
        service: selectedService.label,
      }));
    }
  }, [selectedService]);

  const validate = () => {
    let errs = {};
    if (!formData.name.trim()) errs.name = "Name is required";
    if (!/^\d{10}$/.test(formData.phone)) errs.phone = "Enter a valid 10-digit number";
    if (!/\S+@\S+\.\S+/.test(formData.email)) errs.email = "Enter a valid email";
    if (!formData.service) errs.service = "Please select a service";
    if (!formData.preferredTime) errs.preferredTime = "Please select a time slot";
    if (!formData.date) errs.date = "Please select a date";
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    // ✅ allow only digits in phone
    if (name === "phone") {
      if (!/^\d*$/.test(value)) return;
    }
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
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
        setFormData(initialForm);
        onClose();
        navigate("/thank-you");
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
      noValidate
    >
      <h2 className="text-xl font-bold mb-4 text-center">Book an Appointment</h2>

      {/* Name */}
      <label className="block mb-1 font-medium" htmlFor="name">
        Full Name
      </label>
      <input
        id="name"
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        className="w-full border p-2 rounded mb-1"
        placeholder="Enter your full name"
      />
      {errors.name && <p className="text-red-500 text-sm mb-2">{errors.name}</p>}

      {/* Phone */}
      <label className="block mb-1 font-medium" htmlFor="phone">
        Phone Number
      </label>
      <input
        id="phone"
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        maxLength="10"
        className="w-full border p-2 rounded mb-1"
        placeholder="10-digit number"
      />
      {errors.phone && <p className="text-red-500 text-sm mb-2">{errors.phone}</p>}

      {/* Email */}
      <label className="block mb-1 font-medium" htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        className="w-full border p-2 rounded mb-1"
        placeholder="you@example.com"
      />
      {errors.email && <p className="text-red-500 text-sm mb-2">{errors.email}</p>}

      {/* Service */}
      <label className="block mb-1 font-medium" htmlFor="service">
        Select Service
      </label>
      <select
        id="service"
        name="service"
        value={formData.service}
        onChange={handleChange}
        className="w-full border p-2 rounded mb-1"
      >
        <option value="">Choose a service</option>
        <option value="General Enquiry">General Enquiry</option>
        {servicesList.map((s, i) => (
          <option key={i} value={s}>
            {s}
          </option>
        ))}
        {formData.service &&
          !["General Enquiry", ...servicesList].includes(formData.service) && (
            <option value={formData.service}>{formData.service}</option>
          )}
      </select>
      {errors.service && <p className="text-red-500 text-sm mb-2">{errors.service}</p>}

      {/* Time */}
      <label className="block mb-1 font-medium" htmlFor="preferredTime">
        Preferred Time Slot
      </label>
      <select
        id="preferredTime"
        name="preferredTime"
        value={formData.preferredTime}
        onChange={handleChange}
        className="w-full border p-2 rounded mb-1"
      >
        <option value="">Choose a time slot</option>
        <option value="Morning">Morning (9am - 12pm)</option>
        <option value="Afternoon">Afternoon (1pm - 4pm)</option>
        <option value="Evening">Evening (4pm - 7pm)</option>
      </select>
      {errors.preferredTime && (
        <p className="text-red-500 text-sm mb-2">{errors.preferredTime}</p>
      )}

      <p className="text-xs text-gray-500 mb-3">
        We’ll call you to confirm the exact appointment time.
      </p>

      {/* Date */}
      <label className="block mb-1 font-medium" htmlFor="date">
        Preferred Date
      </label>
      <input
        id="date"
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        min={today}
        className="w-full border p-2 rounded mb-1"
      />
      {errors.date && <p className="text-red-500 text-sm mb-2">{errors.date}</p>}

      {/* Message */}
      <label className="block mb-1 font-medium" htmlFor="message">
        Message / Notes (Optional)
      </label>
      <textarea
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        className="w-full border p-2 rounded mb-3"
        placeholder="Any special request or concern?"
        rows="3"
      />

      {/* Submit */}
      <button
        type="submit"
        disabled={isSending}
        className={`flex items-center justify-center bg-blue-600 text-white w-full py-2 rounded transition ${
          isSending ? "opacity-70 cursor-not-allowed" : "hover:bg-blue-700"
        }`}
      >
        {isSending ? (
          <>
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

      {/* Cancel */}
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
