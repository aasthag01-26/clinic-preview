import { useState } from "react";

export default function ServiceDetails({ service, onClose, onOpenBooking }) {
  const [openFAQ, setOpenFAQ] = useState(null);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-2 sm:px-4">
      <div className="bg-white rounded-xl max-w-lg w-full p-4 sm:p-6 relative overflow-y-auto max-h-[90vh]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 sm:top-3 right-2 sm:right-3 text-gray-600 hover:text-black"
        >
          ✕
        </button>

        {/* Service Title */}
        <h3 className="text-xl sm:text-2xl font-bold mb-2">{service.name}</h3>
        {service.tagline && (
          <p className="text-gray-700 font-medium mb-3">{service.tagline}</p>
        )}

        {/* Image */}
        {service.image && (
          <img
            src={service.image}
            alt={service.name}
            className="w-full h-48 sm:h-56 object-cover rounded-lg mb-4"
          />
        )}

        {/* About */}
        {service.details?.about && (
          <div className="mb-4">
            <h4 className="font-semibold text-gray-900 mb-1">About</h4>
            <p className="text-gray-600 text-sm sm:text-base">
              {service.details.about}
            </p>
          </div>
        )}

        {/* Perfect For */}
        {service.details?.perfectFor && (
          <div className="mb-4">
            <h4 className="font-semibold text-gray-900 mb-1">Perfect For</h4>
            <ul className="list-disc list-inside text-gray-600 text-sm sm:text-base space-y-1">
              {service.details.perfectFor.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Steps */}
        {service.details?.steps && (
          <div className="mb-4">
            <h4 className="font-semibold text-gray-900 mb-1">Steps</h4>
            <ol className="list-decimal list-inside text-gray-600 text-sm sm:text-base space-y-1">
              {service.details.steps.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ol>
          </div>
        )}

        {/* Before Care */}
        {service.details?.beforeCare && (
          <div className="mb-4">
            <h4 className="font-semibold text-gray-900 mb-1">Before Care</h4>
            <ul className="list-disc list-inside text-gray-600 text-sm sm:text-base space-y-1">
              {service.details.beforeCare.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        )}

        {/* After Care */}
        {service.details?.afterCare && (
          <div className="mb-4">
            <h4 className="font-semibold text-gray-900 mb-1">After Care</h4>
            <ul className="list-disc list-inside text-gray-600 text-sm sm:text-base space-y-1">
              {service.details.afterCare.map((a, i) => (
                <li key={i}>{a}</li>
              ))}
            </ul>
          </div>
        )}

        {/* FAQs with Accordion */}
        {service.details?.faqs && (
          <div className="mb-4">
            <h4 className="font-semibold text-gray-900 mb-2">FAQs</h4>
            <div className="divide-y divide-gray-200">
              {service.details.faqs.map((faq, i) => (
                <div key={i} className="py-2">
                  <button
                    className="w-full text-left font-medium text-gray-800 flex justify-between items-center"
                    onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                  >
                    Q: {faq.q}
                    <span>{openFAQ === i ? "−" : "+"}</span>
                  </button>
                  {openFAQ === i && (
                    <p className="text-gray-600 text-sm mt-1">A: {faq.a}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Price & Duration */}
        {(service.price || service.details?.duration) && (
          <div className="mb-4">
            {service.price && (
              <p className="text-base sm:text-lg font-semibold">
                ₹{service.price}
              </p>
            )}
            {service.details?.duration && (
              <p className="text-gray-500 text-sm">
                {service.details.duration}
              </p>
            )}
          </div>
        )}

        {/* Book Now */}
        <button
          onClick={() => {
            onOpenBooking({
              service_name: service.name,
              service_price: service.price,
            });
            onClose();
          }}
          className="w-full px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 text-sm sm:text-base sticky bottom-0"
        >
          Book Now
        </button>
      </div>
    </div>
  );
}
