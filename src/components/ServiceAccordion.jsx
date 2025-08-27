import React from "react";
import formatRupee from "./FormatRupee";

export default function ServiceAccordion({ service, isExpanded, onToggle, onBook }) {
  const minVariantPrice = service.variants?.length ? Math.min(...service.variants.map(v => v.price)) : service.price;

  return (
    <div className="bg-white border rounded-2xl p-4">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-lg font-semibold">{service.name}</div>
          <div className="text-sm text-gray-500">{service.tagline}</div>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-gray-700 font-medium">{service.variants ? `Starts at ${formatRupee(minVariantPrice)}` : formatRupee(service.price)}</div>
          <button
            onClick={onToggle}
            aria-expanded={isExpanded}
            className="text-sm px-3 py-1 rounded-md border"
          >
            {isExpanded ? "Hide Details ▲" : "View Details ▼"}
          </button>
        </div>
      </div>

      {isExpanded && (
        <div className="mt-4 grid md:grid-cols-3 gap-4">
          <div className="md:col-span-1">
            <img src={service.image} alt={service.name} className="w-full h-40 object-cover rounded-lg" onError={(e)=> e.target.style.display="none"} />
          </div>

          <div className="md:col-span-2 space-y-3">
            <div className="text-gray-700">{service.details?.about}</div>

            {service.details?.perfectFor && (
              <div>
                <div className="font-medium">This is perfect for:</div>
                <ul className="list-disc pl-5 text-sm text-gray-600">
                  {service.details.perfectFor.map((p,i) => <li key={i}>{p}</li>)}
                </ul>
              </div>
            )}

            {service.details?.steps && (
              <div>
                <div className="font-medium">The process in steps:</div>
                <ol className="list-decimal pl-5 text-sm text-gray-600">
                  {service.details.steps.map((st, i) => <li key={i}>{st}</li>)}
                </ol>
              </div>
            )}

            <div className="flex gap-4 items-center">
              <button onClick={() => onBook()} className="bg-black text-white px-4 py-2 rounded-lg">Book Now</button>

              {service.variants?.length > 0 && (
                <div className="flex gap-2">
                  {service.variants.map((v, idx) => (
                    <button key={idx} onClick={() => onBook(v)} className="border px-3 py-2 rounded-md text-sm">
                      {v.name} • {formatRupee(v.price)}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="text-xs text-gray-500">
              <strong>Before Care:</strong> {service.details?.beforeCare?.join(", ")}
              <br />
              <strong>After Care:</strong> {service.details?.afterCare?.join(", ")}
            </div>

            {service.details?.faqs && (
              <div className="mt-2">
                <div className="font-medium">FAQs</div>
                <div className="text-sm text-gray-600">
                  {service.details.faqs.map((f, i) => (
                    <div key={i} className="mt-1">
                      <strong>{f.q}</strong>
                      <div>{f.a}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>
      )}
    </div>
  );
}
