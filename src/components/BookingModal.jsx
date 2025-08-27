// src/components/BookingModal.jsx
import BookingForm from "./BookingForm";

export default function BookingModal({ isOpen, onClose, selectedService }) {
  if (!isOpen) return null; // ✅ Hide when closed

  return (
    <div
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
      onClick={onClose} // ✅ close when clicking outside
    >
      <div
        className="relative bg-white rounded-xl shadow-lg p-4 max-w-lg w-full"
        onClick={(e) => e.stopPropagation()} // ✅ stop propagation (no outside close)
      >
        {/* Booking Form */}
        <BookingForm onClose={onClose} selectedService={selectedService} />

        {/* Close Button (optional) */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-red-500"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
