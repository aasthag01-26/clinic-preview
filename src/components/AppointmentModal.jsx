import BookingForm from "./BookingForm";

export default function AppointmentModal({ open, onClose, selectedService }) {
  if (!open) return null; // don't render modal if not open

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg w-96 p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-black"
        >
          ✕
        </button>
      <BookingForm onClose={onClose} selectedService={selectedService} />
      </div>
    </div>
  );
}
