import { useState } from "react";
import ServiceDetails from "./ServiceDetails";

export default function ServiceCard({ service, category, onOpenBooking }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <div className="bg-gray-50 p-4 sm:p-6 rounded-xl shadow-sm hover:shadow-lg transition duration-300 flex flex-col">
        {/* Service Image */}
        {service.image && (
          <img
            src={service.image}
            alt={service.name}
            className="w-full h-40 sm:h-48 object-cover rounded-lg mb-3"
          />
        )}

        {/* Service Name */}
        <h4 className="text-base sm:text-lg font-semibold mb-1">
          {service.name}
        </h4>

        {/* Tagline */}
        {service.tagline && (
          <p className="text-gray-700 font-medium text-xs sm:text-sm mb-1">
            {service.tagline}
          </p>
        )}

        {/* Short description */}
        {service.description && (
          <p className="text-gray-500 text-xs sm:text-sm line-clamp-3 flex-grow">
            {service.description}
          </p>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-2 mt-4">
          <button
            onClick={() => setShowDetails(true)}
            className="px-3 sm:px-4 py-1.5 sm:py-2 border border-brand-teal text-brand-teal rounded-lg text-xs sm:text-sm hover:bg-brand-teal hover:text-white transition"
          >
            View Details
          </button>
          <button
            onClick={() =>
              onOpenBooking({
                service_name: service.name,
                service_price: service.price,
                category,
              })
            }
            className="px-3 sm:px-4 py-1.5 sm:py-2 bg-brand-pink text-white rounded-lg text-xs sm:text-sm hover:bg-pink-600 transition"
          >
            Book Now
          </button>
        </div>
      </div>

      {/* Details Modal */}
      {showDetails && (
        <ServiceDetails
          service={service}
          onClose={() => setShowDetails(false)}
          onOpenBooking={onOpenBooking}
        />
      )}
    </>
  );
}
