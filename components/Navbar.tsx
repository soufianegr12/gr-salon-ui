import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes, FaSpa } from "react-icons/fa";

interface NavbarProps {
  lang: string;
  setLang: (lang: string) => void;
  theme: string;
  setTheme: (theme: string) => void;
}

export default function Navbar({ lang, setLang }: NavbarProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const t = lang === "de" ? {
    brand: "Lumina Elegance",
    home: "Startseite",
    services: "Dienstleistungen",
    about: "Über uns",
    contact: "Kontakt",
    disclaimer: "Haftungsausschluss",
    book: "Termin buchen"
  } : {
    brand: "Lumina Elegance",
    home: "Home",
    services: "Services",
    about: "About",
    contact: "Contact",
    disclaimer: "Disclaimer",
    book: "Book Appointment"
  };

  return (
    <nav className="sticky top-0 z-50 bg-black/95 backdrop-blur-md border-b border-[#D4AF37]/20 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#D4AF37] to-[#AA7C11] flex items-center justify-center text-black font-bold shadow-md group-hover:scale-105 transition-transform">
            <FaSpa className="text-xl" />
          </div>
          <span className="text-2xl font-bold tracking-wide bg-gradient-to-r from-white via-gray-200 to-[#D4AF37] bg-clip-text text-transparent">
            {t.brand}
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-8 font-medium text-gray-300">
          <Link href="/" className="hover:text-[#D4AF37] transition-colors">{t.home}</Link>
          <Link href="/services" className="hover:text-[#D4AF37] transition-colors">{t.services}</Link>
          <Link href="/#contact" className="hover:text-[#D4AF37] transition-colors">{t.contact}</Link>
          <Link href="/bookingForm" className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-black font-bold shadow-lg hover:scale-105 transition-all">
            {t.book}
          </Link>
        </div>

        {/* Controls: Language Switcher */}
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setLang(lang === "en" ? "de" : "en")}
            className="px-3.5 py-1.5 text-xs font-bold rounded-lg bg-white/10 text-[#D4AF37] border border-[#D4AF37]/40 hover:bg-white/20 transition-all"
          >
            {lang.toUpperCase()}
          </button>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-[#D4AF37]">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-black border-b border-[#D4AF37]/20 px-4 pt-4 pb-6 space-y-4 text-center">
          <Link href="/" onClick={() => setIsOpen(false)} className="block py-2 text-gray-200 hover:text-[#D4AF37]">{t.home}</Link>
          <Link href="/services" onClick={() => setIsOpen(false)} className="block py-2 text-gray-200 hover:text-[#D4AF37]">{t.services}</Link>
          <Link href="/#contact" onClick={() => setIsOpen(false)} className="block py-2 text-gray-200 hover:text-[#D4AF37]">{t.contact}</Link>
          <Link href="/bookingForm" onClick={() => setIsOpen(false)} className="inline-block w-full py-3 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-black font-bold">
            {t.book}
          </Link>
        </div>
      )}
    </nav>
  );
}