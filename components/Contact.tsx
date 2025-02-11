"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Pesan Anda telah terkirim!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact">
      <div className="container mx-auto px-6 md:px-12 py-20">
      {/* Title Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white">Get in Touch</h2>
        <p className="text-gray-400 mt-2">
          Kami senang mendengar dari Anda! Silakan hubungi kami dan mari kita bekerja sama.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-zinc-900 p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-white mb-6">Send us a message</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-zinc-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-zinc-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="relative">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full bg-zinc-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-white hover:bg-gray-100 transition duration-300 text-black py-3 rounded-lg font-medium"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info & Map */}
        <div className="space-y-8">
          <div className="bg-zinc-900 p-6 rounded-lg shadow-lg flex items-center space-x-4">
            <span className="text-blue-500 text-2xl">
              📍
            </span>
            <div>
              <h4 className="text-lg font-semibold text-white">Our Office</h4>
              <p className="text-gray-400">Jl. Youth Ware No. 1, Jakarta</p>
            </div>
          </div>

          <div className="bg-zinc-900 p-6 rounded-lg shadow-lg flex items-center space-x-4">
            <span className="text-blue-500 text-2xl">
              📞
            </span>
            <div>
              <h4 className="text-lg font-semibold text-white">Call Us</h4>
              <p className="text-gray-400">+62 812-3456-7890</p>
            </div>
          </div>

          <div className="bg-zinc-900 p-6 rounded-lg shadow-lg flex items-center space-x-4">
            <span className="text-blue-500 text-2xl">
              ✉️
            </span>
            <div>
              <h4 className="text-lg font-semibold text-white">Email Us</h4>
              <p className="text-gray-400">contact@youthware.com</p>
            </div>
          </div>

          {/* Google Maps Embed */}
          <div className="overflow-hidden rounded-lg shadow-lg">
            <iframe
              className="w-full h-56 rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31693.202438731504!2d106.826782!3d-6.208763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sYouth%20Ware%20HQ!5e0!3m2!1sen!2sid!4v1700000000000"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}
