export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container grid md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div className="card">
          <h3 className="text-2xl font-bold text-brand-700">Contact Us</h3>
          <p className="mt-2 text-gray-600">Call, email, or visit us. We’re happy to help.</p>
          <div className="mt-4 space-y-1 text-gray-700">
            <p><strong>Phone:</strong> +91 99309 29573</p>
            <p><strong>Email:</strong> info@glowshine.net</p>
            <p><strong>Address:</strong> Dadar West, Mumbai</p>
          </div>
          <iframe
            title="Clinic Location"
            className="w-full h-56 mt-4 rounded-xl"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=Dadar%20West%20Mumbai&output=embed"
          />
        </div>

        {/* Enquiry Form */}
        <div className="card">
          <h3 className="text-2xl font-bold text-brand-700">Quick Enquiry</h3>
          <p className="mt-2 text-gray-600">Leave your details and we’ll get back to you.</p>
          <form
            className="mt-4 grid gap-4"
            method="POST"
            action="https://formspree.io/f/your_form_id"
          >
            <input className="input" name="name" placeholder="Full Name" required />
            <input className="input" name="phone" placeholder="Phone Number" required />
            <input className="input" type="email" name="email" placeholder="Email" />
            <textarea className="input" name="message" rows="4" placeholder="How can we help?" />
            <button className="btn-primary" type="submit">Send Message</button>
          </form>
          <p className="mt-2 text-xs text-gray-500">No backend required — powered by Formspree.</p>
        </div>
      </div>
    </section>
  );
}
