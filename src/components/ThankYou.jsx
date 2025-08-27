import { CheckCircle2 } from "lucide-react"; // ✅ nice icon

export default function ThankYou() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-[#FFF5EF] px-4 text-center">
      
      {/* Success Icon */}
      <CheckCircle2 className="text-green-600 w-16 h-16 mb-4" />

      {/* Heading */}
      <h1 className="text-3xl font-bold mb-2">Thank You! 🎉</h1>
      <p className="text-lg text-gray-700 mb-6 max-w-xl">
        We’ve received your booking request. Our team will contact you via
        phone or WhatsApp within <strong>24 hours</strong> to confirm your
        appointment.
      </p>

      {/* Action Buttons */}
      <div className="space-y-4">
        <a
          href="/services"
          className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
        >
          Explore More Services
        </a>
        <a
          href="https://www.instagram.com/purelyrupayna?igsh=bGYxcm1wZDNtdXRl"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-gray-600 hover:underline"
        >
          📷 Follow us on Instagram
        </a>
      </div>

      {/* Urgent Help */}
      <p className="text-gray-500 mt-6 text-sm">
        Urgent? Call us at{" "}
        <a href="tel:+919876543210" className="font-semibold text-black">
          +91-9205661676
        </a>
      </p>
    </section>
  );
}
