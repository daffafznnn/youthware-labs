"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // Tutup menu setelah klik (mobile)
    }
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-20 transition-all duration-300 ${
        isScrolled ? "bg-zinc-900 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="relative flex items-center justify-between py-4">
          {/* Logo */}
          <div>
            <Link href="/">
              <img
                src="/youthware-logo.png"
                alt="Youth Ware Logo"
                className="h-12 w-auto object-cover"
              />
            </Link>
          </div>

          {/* Menu Items */}
          <ul className="hidden lg:flex space-x-6 text-white">
            <li>
              <button onClick={() => scrollToSection("hero")} className="hover:text-gray-400">
                Home
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("about")} className="hover:text-gray-400">
                About
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("services")} className="hover:text-gray-400">
                Services
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("contact")} className="hover:text-gray-400">
                Contact
              </button>
            </li>
          </ul>

          {/* Tombol Login & Start Now */}
          <div className="hidden lg:flex space-x-4">
            <button className="px-4 py-2 text-sm font-medium bg-white text-dark rounded-md hover:bg-gray-200">
              Start now
            </button>
          </div>

          {/* Burger Menu untuk Mobile */}
          <div className="lg:hidden flex items-center">
            <button className="text-white" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-x"
                >
                  <line x1="18" x2="6" y1="6" y2="18"></line>
                  <line x1="6" x2="18" y1="6" y2="18"></line>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-menu"
                >
                  <line x1="4" x2="20" y1="12" y2="12"></line>
                  <line x1="4" x2="20" y1="6" y2="6"></line>
                  <line x1="4" x2="20" y1="18" y2="18"></line>
                </svg>
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-zinc-900 text-white px-4 py-6 absolute top-full left-0 w-full shadow-md">
            <ul className="space-y-4">
              <li>
                <button onClick={() => scrollToSection("hero")} className="block w-full text-left hover:text-gray-400">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("about")} className="block w-full text-left hover:text-gray-400">
                  About
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("services")} className="block w-full text-left hover:text-gray-400">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("contact")} className="block w-full text-left hover:text-gray-400">
                  Contact
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
