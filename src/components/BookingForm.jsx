import { useState, useEffect } from "react";

export default function BookingForm({ onClose, selectedService }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    preferredTime: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  // Set selected service when the modal opens
  useEffect(() => {
    setFormData((prev) => ({ ...prev, service: selectedService || "" }));
  }, [selectedService]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking Details:", formData);
    setFormSubmitted(true);

    // Close modal after 3 seconds
    setTimeout(() => {
      onClose();
      setFormSubmitted(false);
    }, 3000);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md"
    >
      <h2 className="text-xl font-bold mb-4 text-center">
        Book an Appointment
      </h2>

      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        className="w-full border p-2 rounded mb-3"
        required
      />

      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
        className="w-full border p-2 rounded mb-3"
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        className="w-full border p-2 rounded mb-3"
        required
      />

      <select
        name="service"
        value={formData.service}
        onChange={handleChange}
        className="w-full border p-2 rounded mb-3"
        required
      >
        <option value="">Select Service</option>
        <option value="Laser Hair Reduction">Laser Hair Reduction</option>
        <option value="Skin Rejuvenation">Skin Rejuvenation</option>
        <option value="Chemical Peels">Chemical Peels</option>
      </select>

      <select
        name="preferredTime"
        value={formData.preferredTime}
        onChange={handleChange}
        className="w-full border p-2 rounded mb-3"
        required
      >
        <option value="">Preferred Time</option>
        <option value="Morning">Morning (10am - 1pm)</option>
        <option value="Afternoon">Afternoon (1pm - 4pm)</option>
        <option value="Evening">Evening (4pm - 7pm)</option>
      </select>

      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        className="w-full border p-2 rounded mb-3"
        required
      />

      <button
        type="submit"
        className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700"
      >
        Confirm Booking
      </button>

      {formSubmitted && (
        <p className="text-green-600 text-center mt-4">
          ✅ Thank you! We’ll contact you soon to confirm your appointment.
        </p>
      )}

      <button
        type="button"
        onClick={onClose}
        className="mt-3 text-gray-600 w-full underline"
      >
        Cancel
      </button>
    </form>
  );
}
