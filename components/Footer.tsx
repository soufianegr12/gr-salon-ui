import React from 'react';
import Link from 'next/link';
import { FaInstagram, FaFacebook, FaYoutube, FaLinkedin } from 'react-icons/fa';

interface FooterProps {
  lang: string;
}

export default function Footer({ lang }: FooterProps) {
  const t = lang === 'de' ? {
    brandPart1: "Lumina",
    brandPart2: "Elegance",
    description: "Besuchen Sie uns für all Ihre Schönheits- und Wellnessbedürfnisse. Unser Team von erfahrenen Stylisten sorgt dafür, dass Sie sich erfrischt fühlen.",
    linksTitle: "Links",
    home: "Startseite",
    contact: "Kontakt",
    services: "Dienstleistungen",
    about: "Über uns",
    disclaimer: "Haftungsausschluss",
    socialTitle: "Folgen Sie uns",
    privacy: "Datenschutz",
    terms: "AGB"
  } : {
    brandPart1: "Lumina",
    brandPart2: "Elegance",
    description: "Visit us for all your beauty and wellness needs. Our team of experienced stylists and professionals will ensure you leave feeling refreshed.",
    linksTitle: "Links",
    home: "Home",
    contact: "Contact Us",
    services: "Services",
    about: "About Us",
    disclaimer: "Disclaimer",
    socialTitle: "Follow Us",
    privacy: "Privacy Policy",
    terms: "Terms and Conditions"
  };

  return (
    <footer className="bg-black text-gray-300 border-t border-[#D4AF37]/30 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 className="text-2xl font-bold mb-4 text-white">
            {t.brandPart1} <span className="text-[#D4AF37]">{t.brandPart2}</span>
          </h3>
          <p className="text-gray-400 leading-relaxed text-sm">
            {t.description}
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-4 text-lg border-b border-[#D4AF37]/30 pb-2 inline-block">{t.linksTitle}</h4>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li><Link href="/" className="hover:text-[#D4AF37] transition-colors">{t.home}</Link></li>
            <li><Link href="/services" className="hover:text-[#D4AF37] transition-colors">{t.services}</Link></li>
            <li><Link href="/bookingForm" className="hover:text-[#D4AF37] transition-colors">{t.contact}</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-4 text-lg border-b border-[#D4AF37]/30 pb-2 inline-block">{t.socialTitle}</h4>
          <div className="flex space-x-4 text-xl text-[#D4AF37]">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform"><FaInstagram /></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform"><FaFacebook /></a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform"><FaYoutube /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform"><FaLinkedin /></a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500 mt-12 border-t border-zinc-900 pt-6 flex flex-col sm:flex-row justify-between items-center text-xs">
        <p>&copy; {new Date().getFullYear()} Lumina Elegance. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 sm:mt-0">
          <Link href="/privacy-policy" className="hover:text-[#D4AF37]">{t.privacy}</Link>
          <Link href="/terms-and-conditions" className="hover:text-[#D4AF37]">{t.terms}</Link>
        </div>
      </div>
    </footer>
  );
}