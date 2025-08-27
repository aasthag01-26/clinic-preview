// src/components/ServiceDetails.jsx
export default function ServiceDetails({ service, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center overflow-auto">
      <div className="bg-white p-6 rounded-2xl max-w-3xl w-full shadow-lg">
        <button className="float-right" onClick={onClose}>✕</button>
        <h2 className="text-2xl font-bold mb-2">{service.name}</h2>
        <p className="mb-4 text-gray-700">₹{service.price}</p>

        <h3 className="font-semibold mt-3">What is it?</h3>
        <p>{service.details.what}</p>

        <h3 className="font-semibold mt-3">How it works</h3>
        <p>{service.details.how}</p>

        <h3 className="font-semibold mt-3">Aftercare</h3>
        <p>{service.details.aftercare}</p>

        <h3 className="font-semibold mt-3">FAQs</h3>
        <ul className="list-disc pl-5">
          {service.details.faqs.map((f, i) => (
            <li key={i}><b>{f.q}</b> – {f.a}</li>
          ))}
        </ul>

        <div className="mt-4">
          <button className="bg-black text-white px-4 py-2 rounded">Book Now</button>
        </div>
      </div>
    </div>
  );
}
