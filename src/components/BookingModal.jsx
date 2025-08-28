import { useEffect } from "react";
import BookingForm from "./BookingForm";

export default function BookingModal({ isOpen, onClose, selectedService }) {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
      onClick={onClose}
      aria-hidden="true"
    >
      <div
        className="relative bg-white rounded-xl shadow-lg p-4 max-w-lg w-full"
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-title"
        onClick={(e) => e.stopPropagation()}
      >
        <BookingForm onClose={onClose} selectedService={selectedService} />

        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-red-500"
          aria-label="Close modal"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
