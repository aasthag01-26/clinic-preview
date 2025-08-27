// src/components/ServiceCard.jsx
export default function ServiceCard({ service, onBook, onView }) {
  return (
    <div className="bg-white rounded-2xl shadow p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Left Side */}
      <div>
        <h3 className="text-lg font-bold">{service.name}</h3>
        <div className="text-sm text-gray-500 flex gap-4 my-1">
          <span>⭐ {service.rating}</span>
          <span>⏱ {service.duration}</span>
        </div>
        <p className="text-sm text-gray-600">{service.description[0]}</p>
        <p className="text-sm text-gray-600">{service.description[1]}</p>

        <div className="mt-4 flex gap-3">
          <button
            onClick={() => onView(service)}
            className="border border-gray-800 px-3 py-1 rounded-lg"
          >
            View Details
          </button>
          <button
            onClick={() => onBook(service)}
            className="bg-black text-white px-4 py-1 rounded-lg"
          >
            Book Now
          </button>
        </div>
      </div>

      {/* Right Side */}
      <div>
        <img
          src={service.image}
          alt={service.name}
          className="rounded-xl w-full h-48 object-cover"
        />
      </div>
    </div>
  );
}
