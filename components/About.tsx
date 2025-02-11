import React from "react";

export default function About() {
  return (
    <section id="about" className="bg-zinc-900 text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl font-extrabold sm:text-5xl lg:text-6xl">
          About <span className="text-zinc-400">YouthWare</span>
        </h1>
        <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
          YouthWare Labs adalah solusi digital inovatif untuk pengembangan website dan konsultasi IT.
          Kami membantu bisnis dan individu menciptakan pengalaman digital yang luar biasa.
        </p>
        <img
          src="/images/youtwareLabs-logo-main.jpg"
          alt="Youth Ware Hero"
          className="mt-10 mx-auto w-full max-w-lg"
        />
      </div>

      {/* Why Choose Us */}
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center">Why Choose Us?</h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "Professional Team", desc: "Tim ahli dengan pengalaman di berbagai proyek digital." },
            { title: "Modern Technology", desc: "Menggunakan teknologi terbaru seperti React dan Next.js." },
            { title: "Client Focused", desc: "Solusi disesuaikan dengan kebutuhan bisnis Anda." },
          ].map((item, index) => (
            <div key={index} className="bg-zinc-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Our Values */}
      <div className="container mx-auto px-6 py-16 bg-zinc-950 rounded-lg">
        <h2 className="text-3xl font-bold text-center">Our Values</h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "Innovation", desc: "Kami selalu berinovasi dalam solusi teknologi." },
            { title: "Quality", desc: "Memberikan hasil terbaik dengan standar tinggi." },
            { title: "Integrity", desc: "Menjalankan bisnis dengan transparansi dan kepercayaan." },
            { title: "Commitment", desc: "Fokus untuk memenuhi kebutuhan klien." },
          ].map((item, index) => (
            <div key={index} className="bg-zinc-800 p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Our Team */}
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center">Meet Our Team</h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { name: "John Doe", role: "Founder & CEO", img: "/images/team/john.jpg" },
            { name: "Jane Smith", role: "Lead Developer", img: "/images/team/jane.jpg" },
            { name: "Michael Lee", role: "UI/UX Designer", img: "/images/team/michael.jpg" },
          ].map((member, index) => (
            <div key={index} className="bg-zinc-800 p-6 rounded-lg shadow-md text-center">
              <img
                src={member.img}
                alt={member.name}
                className="w-32 h-32 mx-auto rounded-full object-cover"
              />
              <h3 className="mt-4 text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-400">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
