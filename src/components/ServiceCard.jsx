// src/components/ServiceCard.jsx
import { useState } from "react";
import ServiceDetails from "./ServiceDetails";

export default function ServiceCard({ service, category, onOpenBooking }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="p-6 rounded-2xl bg-white shadow-sm border hover:shadow-md transition">
      {service.image && (
        <img
          src={service.image}
          alt={service.name}
          className="w-full h-40 object-cover rounded-lg mb-4"
          onError={(e) => (e.currentTarget.style.display = "none")}
        />
      )}

      <h4 className="text-lg font-semibold">{service.name}</h4>

      {service.description && (
        <p className="text-gray-500 text-sm mt-2 line-clamp-3">
          {service.description}
        </p>
      )}

      <div className="flex gap-3 mt-4">
        <button
          onClick={() =>
            onOpenBooking({
              label: service.name,
              id: service.id,
              category: category,
            })
          }
          className="px-4 py-2 bg-black text-white rounded-xl hover:bg-gray-800"
        >
          Enquire
        </button>

        <button
          onClick={() => setShowDetails(true)}
          className="px-4 py-2 border rounded-xl hover:bg-gray-100"
        >
          View Details
        </button>
      </div>

      {/* Details Modal */}
      {showDetails && (
        <ServiceDetails
          service={{ ...service, category }}
          onClose={() => setShowDetails(false)}
          onBook={(svc) => {
            setShowDetails(false);
            onOpenBooking({
              label: svc.name,
              id: svc.id,
              category: svc.category,
            });
          }}
        />
      )}
    </div>
  );
}
