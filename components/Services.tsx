import React from "react";

export default function Services() {
  return (
    <section id="services" className="bg-zinc-900 text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl font-extrabold sm:text-5xl lg:text-6xl">
          Our <span className="text-zinc-400">Services</span>
        </h1>
        <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
          Kami menyediakan berbagai layanan digital, mulai dari pengembangan website hingga konsultasi IT, untuk membantu bisnis Anda berkembang.
        </p>
      </div>

      {/* List of Services */}
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center">What We Offer</h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Web Development",
              desc: "Membangun website modern, responsif, dan cepat menggunakan teknologi terbaru seperti React dan Next.js.",
              icon: "🌐",
            },
            {
              title: "Mobile App Development",
              desc: "Pengembangan aplikasi mobile berbasis React Native untuk iOS dan Android.",
              icon: "📱",
            },
            {
              title: "IT Consultation",
              desc: "Konsultasi teknologi untuk bisnis Anda, termasuk arsitektur sistem dan transformasi digital.",
              icon: "💡",
            },
            {
              title: "UI/UX Design",
              desc: "Mendesain antarmuka pengguna yang menarik dan pengalaman yang intuitif.",
              icon: "🎨",
            },
            {
              title: "SEO Optimization",
              desc: "Meningkatkan visibilitas website Anda di mesin pencari dengan strategi SEO yang efektif.",
              icon: "🚀",
            },
            {
              title: "Custom Software",
              desc: "Pengembangan perangkat lunak khusus sesuai dengan kebutuhan bisnis Anda.",
              icon: "⚙️",
            },
          ].map((service, index) => (
            <div key={index} className="bg-zinc-800 p-6 rounded-lg shadow-md text-center">
              <div className="text-5xl">{service.icon}</div>
              <h3 className="mt-4 text-xl font-semibold">{service.title}</h3>
              <p className="mt-3 text-gray-400">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* How We Work */}
      <div className="container mx-auto px-6 py-16 bg-zinc-950 rounded-lg">
        <h2 className="text-3xl font-bold text-center">How We Work</h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { step: "1", title: "Consultation", desc: "Diskusi awal untuk memahami kebutuhan proyek Anda." },
            { step: "2", title: "Planning", desc: "Menyusun rencana proyek dan timeline pengerjaan." },
            { step: "3", title: "Development", desc: "Membangun solusi sesuai dengan spesifikasi yang disepakati." },
            { step: "4", title: "Launch & Support", desc: "Peluncuran dan dukungan pasca-peluncuran untuk memastikan kelancaran sistem." },
          ].map((step, index) => (
            <div key={index} className="bg-zinc-800 p-6 rounded-lg shadow-md text-center">
              <div className="text-3xl font-bold text-primary">{step.step}</div>
              <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>
              <p className="mt-3 text-gray-400">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call To Action */}
      <div className="container mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold">Ready to Start Your Project?</h2>
        <p className="mt-4 text-lg text-gray-300">
          Hubungi kami sekarang dan wujudkan ide digital Anda bersama Youth Ware.
        </p>
        <div className="mt-16">
          <a href="#contact" className="px-6 py-3 bg-white text-black rounded-lg shadow-md hover:bg-gray-200 transition">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
