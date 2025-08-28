import { CheckCircle2 } from "lucide-react";

export default function ThankYou() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-[#FFF5EF] px-4 sm:px-6 text-center">
      
      {/* Success Icon */}
      <CheckCircle2 className="text-green-600 w-14 h-14 sm:w-16 sm:h-16 mb-4" />

      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl font-bold mb-3">🎉 Thank You!</h1>

      {/* Subtitle */}
      <p className="text-base sm:text-lg text-gray-700 mb-6 max-w-xl">
        We’ve received your booking request. Our team will contact you within{" "}
        <span className="font-semibold">24 hours</span> to confirm.
      </p>

      {/* Actions */}
      <div className="space-y-4 w-full max-w-sm">
        <a
          href="/services"
          className="block w-full px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
        >
          Explore More Services
        </a>

        <a
          href="https://www.instagram.com/purelyrupayna"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-gray-700 hover:underline"
        >
          📷 Follow us on Instagram
        </a>

        <p className="text-gray-500 text-sm">
          Urgent? Call us at{" "}
          <a href="tel:+919205661676" className="font-semibold hover:underline">
            +91-9205661676
          </a>
        </p>
      </div>
    </section>
  );
}
