import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WorkingHours from '../components/WorkingHours';

interface HomeProps {
  lang: string;
  setLang: (lang: string) => void;
  theme: string;
  setTheme: (theme: string) => void;
}

export default function Home({ lang, setLang, theme, setTheme }: HomeProps) {
  const t = lang === 'de' ? {
    title: "Lumina Elegance - Startseite",
    desc: "Willkommen bei Lumina Elegance, dem exklusiven Ort für Ihre Schönheits- und Wellnessbedürfnisse.",
    welcome: "Willkommen bei Lumina Elegance",
    subtitle: "Erleben Sie das Beste in Luxus, Schönheit und Wellness mit unseren professionellen Dienstleistungen.",
    servicesTitle: "Unsere Dienstleistungen",
    servicesSubtitle: "Entdecken Sie unsere exklusive Palette an erstklassigen Behandlungen.",
    haircut: "Haarschnitt",
    haircutDesc: "Professionelle Haarschnitte, maßgeschneidert auf Ihren individuellen Stil.",
    coloring: "Haarfärbung",
    coloringDesc: "Hochwertige Colorationen für einen strahlenden und natürlichen Look.",
    manicure: "Maniküre",
    manicureDesc: "Perfekt gepflegte Hände und Nägel mit unseren Premium-Pflegeangeboten.",
    gallery: "Galerie & Impressionen",
    testimonials: "Kundenstimmen",
    t1: "„Lumina Elegance ist absolute Spitzenklasse! Mein Haar sah noch nie so atemberaubend aus.“",
    t2: "„Hervorragender Service, luxuriöses Ambiente und ein unglaublich freundliches Team.“",
    ctaTitle: "Bereit für Ihre Verwandlung?",
    ctaSub: "Buchen Sie jetzt Ihren Termin und erleben Sie pure Entspannung.",
    ctaBtn: "Termin vereinbaren",
    contactTitle: "Kontaktieren Sie Uns",
    name: "Ihr Name",
    email: "Ihre E-Mail-Adresse",
    message: "Ihre Nachricht",
    send: "Nachricht Senden"
  } : {
    title: "Lumina Elegance - Home",
    desc: "Welcome to Lumina Elegance, the ultimate destination for your luxury beauty and wellness needs.",
    welcome: "Welcome to Lumina Elegance",
    subtitle: "Experience the pinnacle of luxury, beauty, and wellness with our professional services.",
    servicesTitle: "Our Exclusive Services",
    servicesSubtitle: "Discover our wide range of premium treatments designed to make you look and feel extraordinary.",
    haircut: "Haircut",
    haircutDesc: "Precision haircuts tailored precisely to your unique style.",
    coloring: "Hair Coloring",
    coloringDesc: "Exquisite hair coloring techniques for a radiant, sun-kissed finish.",
    manicure: "Manicure",
    manicureDesc: "Keep your nails flawless and pristine with our luxury manicure treatments.",
    gallery: "Gallery & Impressions",
    testimonials: "Client Testimonials",
    t1: "“Lumina Elegance is simply the best! My hair has never looked more vibrant.”",
    t2: "“An extraordinary experience with wonderful staff and a serene environment.”",
    ctaTitle: "Ready for Your Transformation?",
    ctaSub: "Book your appointment today and indulge in ultimate luxury and self-care.",
    ctaBtn: "Book Now",
    contactTitle: "Get In Touch",
    name: "Your Name",
    email: "Your Email",
    message: "Your Message",
    send: "Send Message"
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-[#D4AF37] selection:text-black">
      <Head>
        <title>{t.title}</title>
        <meta name="description" content={t.desc} />
      </Head>

      <Navbar lang={lang} setLang={setLang} theme={theme} setTheme={setTheme} />

      <main className="w-full">
        {/* Hero Section with Live Background Video */}
        <section className="relative min-h-[85vh] flex items-center justify-center text-center px-4 py-24 bg-black overflow-hidden">
          
          {/* عنصر الفيديو الحي في الخلفية (تم رفع السطوع قليلاً) */}
          <div className="absolute inset-0 z-0 opacity-80">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-full object-cover"
            >
              <source src="/videos/hero-salon.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* تظليل خفيف جداً وغير معتم لكي يظهر الفيديو بوضوح تام */}
          <div className="absolute inset-0 bg-black/30 z-10"></div>
          
          <div className="relative z-20 max-w-4xl mx-auto flex flex-col items-center">
            <span className="px-5 py-2 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/30 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-6 shadow-sm">
              LUXURY SALON & SPA EXPERIENCE
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight">
              {t.welcome}
            </h1>
            <p className="text-base sm:text-xl text-gray-300 mb-10 max-w-2xl font-light leading-relaxed">
              {t.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto justify-center">
              <Link href="/bookingForm" className="px-9 py-4 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-black font-bold shadow-xl hover:scale-105 transition-all text-center">
                {t.ctaBtn}
              </Link>
              <Link href="/services" className="px-9 py-4 rounded-xl bg-white/10 backdrop-blur-md text-white border border-[#D4AF37]/40 font-semibold hover:bg-white/20 transition-all text-center">
                {t.servicesTitle}
              </Link>
            </div>
          </div>
        </section>

        {/* Services Showcase */}
        <section className="py-24 px-4 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-extrabold mb-4 text-black">
              {t.servicesTitle}
            </h2>
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-xl mx-auto text-base sm:text-lg">
              {t.servicesSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-white border border-gray-200 shadow-xl hover:border-[#D4AF37] transition-all group">
              <div className="w-14 h-14 rounded-xl bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center font-bold text-2xl mb-6 group-hover:scale-110 transition-transform">✂️</div>
              <h3 className="text-2xl font-bold mb-3 text-black">{t.haircut}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{t.haircutDesc}</p>
              <span className="text-2xl font-extrabold text-[#D4AF37]">€30</span>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-gray-200 shadow-xl hover:border-[#D4AF37] transition-all group">
              <div className="w-14 h-14 rounded-xl bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center font-bold text-2xl mb-6 group-hover:scale-110 transition-transform">🎨</div>
              <h3 className="text-2xl font-bold mb-3 text-black">{t.coloring}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{t.coloringDesc}</p>
              <span className="text-2xl font-extrabold text-[#D4AF37]">€60</span>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-gray-200 shadow-xl hover:border-[#D4AF37] transition-all group">
              <div className="w-14 h-14 rounded-xl bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center font-bold text-2xl mb-6 group-hover:scale-110 transition-transform">💅</div>
              <h3 className="text-2xl font-bold mb-3 text-black">{t.manicure}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{t.manicureDesc}</p>
              <span className="text-2xl font-extrabold text-[#D4AF37]">€25</span>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-20 bg-gray-50 border-y border-gray-200">
          <div className="max-w-7xl mx-auto px-4 text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-black">{t.gallery}</h2>
            <div className="w-16 h-0.5 bg-[#D4AF37] mx-auto mt-3"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-4 max-w-7xl mx-auto">
            {[1, 2, 3, 5, 6, 7, 8].map((num) => (
              <div key={num} className="relative h-60 rounded-2xl overflow-hidden shadow-md group">
                <img src={`/images/sm/${num}.svg`} alt="Gallery item" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 px-4 max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-black">{t.testimonials}</h2>
          <div className="w-20 h-0.5 bg-[#D4AF37] mx-auto mb-16"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-gray-50 border border-gray-200 shadow-md">
              <p className="text-base sm:text-lg italic mb-6 text-gray-700">{t.t1}</p>
              <span className="font-bold text-[#D4AF37]">- Jane Doe</span>
            </div>
            <div className="p-8 rounded-2xl bg-gray-50 border border-gray-200 shadow-md">
              <p className="text-base sm:text-lg italic mb-6 text-gray-700">{t.t2}</p>
              <span className="font-bold text-[#D4AF37]">- John Smith</span>
            </div>
          </div>
        </section>

        {/* Call to Action Banner */}
        <section className="py-20 bg-black text-white text-center px-4 relative overflow-hidden border-t border-[#D4AF37]/20">
          <div className="absolute inset-0 bg-[#D4AF37]/5 z-0"></div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-5xl font-extrabold mb-4 text-white">{t.ctaTitle}</h2>
            <p className="text-base sm:text-lg text-gray-300 mb-8">{t.ctaSub}</p>
            <Link href="/bookingForm" className="inline-block px-10 py-4 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-black font-extrabold shadow-2xl hover:scale-105 transition-all">
              {t.ctaBtn}
            </Link>
          </div>
        </section>

        {/* Working Hours */}
        <div className="py-12 bg-gray-50">
          <WorkingHours />
        </div>

        {/* Contact Form */}
        <section id="contact" className="py-24 px-4 max-w-3xl mx-auto">
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-gray-200 shadow-2xl">
            <h2 className="text-3xl font-bold mb-4 text-center text-black">
              {t.contactTitle}
            </h2>
            <div className="w-16 h-0.5 bg-[#D4AF37] mx-auto mb-10"></div>
            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert("Message Sent Successfully!"); }}>
              <input type="text" placeholder={t.name} required className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-300 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none transition-all text-black" />
              <input type="email" placeholder={t.email} required className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-300 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none transition-all text-black" />
              <textarea placeholder={t.message} rows={4} required className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-300 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none transition-all text-black"></textarea>
              <button type="submit" className="w-full py-4 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-black font-extrabold shadow-lg hover:opacity-95 transition-all">
                {t.send}
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer lang={lang} />
    </div>
  );
}