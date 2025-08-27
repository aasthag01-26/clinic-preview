// src/components/ServiceDetails.jsx
export default function ServiceDetails({ service, onClose, onBook }) {
  if (!service) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4">
      <div className="bg-white p-6 rounded-2xl max-w-3xl w-full shadow-lg">
        <div className="flex justify-between items-start mb-2">
          <h2 className="text-2xl font-bold">{service.name}</h2>
          <button onClick={onClose} className="text-gray-500">✕</button>
        </div>

        {service.image && (
          <img
            src={service.image}
            alt={service.name}
            className="w-full h-56 object-cover rounded-xl mb-4"
            onError={(e) => (e.currentTarget.style.display = "none")}
          />
        )}

        <p className="text-gray-700 mb-2">{service.description}</p>
        <p className="text-gray-900 font-semibold mb-4">Price: ₹{service.price}</p>

        {service.details?.what && (
          <>
            <h3 className="font-semibold mt-3">What is it?</h3>
            <p className="text-gray-700">{service.details.what}</p>
          </>
        )}

        {service.details?.how && (
          <>
            <h3 className="font-semibold mt-3">How it works</h3>
            <p className="text-gray-700">{service.details.how}</p>
          </>
        )}

        {service.details?.aftercare && (
          <>
            <h3 className="font-semibold mt-3">Aftercare</h3>
            <p className="text-gray-700">{service.details.aftercare}</p>
          </>
        )}

        {service.details?.faqs?.length > 0 && (
          <>
            <h3 className="font-semibold mt-3">FAQs</h3>
            <ul className="list-disc pl-5 text-gray-700">
              {service.details.faqs.map((f, i) => (
                <li key={i}><b>{f.q}</b> – {f.a}</li>
              ))}
            </ul>
          </>
        )}

        <div className="mt-5 flex gap-3">
          <button
            onClick={() => onBook(service.name)}
            className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800"
          >
            Book Now
          </button>
          <button onClick={onClose} className="border px-4 py-2 rounded-lg">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
