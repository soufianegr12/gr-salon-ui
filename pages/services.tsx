import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ServiceCard from '../components/ServiceCard';

interface ServicesProps {
  lang: string;
  setLang: (lang: string) => void;
  theme: string;
  setTheme: (theme: string) => void;
}

const services = [
  {
    "name": "Blowout",
    "description": "Professional blowout for a sleek and polished look.",
    "price": "€30",
    "category": "Hair",
    "image": "/images/services/blowout.svg"
  },
  {
    "name": "Balayage",
    "description": "Hand-painted highlights for a natural, sun-kissed look.",
    "price": "€120",
    "category": "Hair",
    "image": "/images/services/balayage.svg"
  },
  {
    "name": "Ombre Coloring",
    "description": "Gradient hair coloring from dark to light.",
    "price": "€100",
    "category": "Hair",
    "image": "/images/services/ombre_coloring.svg"
  },
  {
    "name": "Updo Styling",
    "description": "Elegant updo styling for special events.",
    "price": "€45",
    "category": "Hair",
    "image": "/images/services/updo_styling.svg"
  },
  {
    "name": "Deep Conditioning Treatment",
    "description": "Intensive conditioning treatment to nourish and repair hair.",
    "price": "€35",
    "category": "Hair",
    "image": "/images/services/deep_conditioning_treatment.svg"
  },
  {
    "name": "Eyebrow Shaping",
    "description": "Professional eyebrow shaping and grooming.",
    "price": "€15",
    "category": "Beauty",
    "image": "/images/services/eyebrow_shaping.svg"
  },
  {
    "name": "Lash Extensions",
    "description": "Semi-permanent lash extensions for a fuller, longer look.",
    "price": "€120",
    "category": "Beauty",
    "image": "/images/services/lash_extensions.svg"
  },
  {
    "name": "Airbrush Makeup",
    "description": "Flawless airbrush makeup application for a long-lasting finish.",
    "price": "€80",
    "category": "Makeup",
    "image": "/images/services/airbrush_makeup.svg"
  },
  {
    "name": "Bridal Makeup",
    "description": "Specialized makeup for brides to look stunning on their big day.",
    "price": "€150",
    "category": "Makeup",
    "image": "/images/services/bridal_makeup.svg"
  },
  {
    "name": "Nail Art",
    "description": "Custom nail art design for unique and creative nails.",
    "price": "€40",
    "category": "Nails",
    "image": "/images/services/nail_art.svg"
  },
  {
    "name": "Gel Manicure",
    "description": "Long-lasting gel polish manicure.",
    "price": "€40",
    "category": "Nails",
    "image": "/images/services/gel_manicure.svg"
  },
  {
    "name": "Acrylic Nails",
    "description": "Durable acrylic nail extensions.",
    "price": "€50",
    "category": "Nails",
    "image": "/images/services/acrylic_nails.svg"
  },
  {
    "name": "Hot Stone Massage",
    "description": "Relaxing massage using heated stones to relieve tension.",
    "price": "€75",
    "category": "Beauty",
    "image": "/images/services/hot_stone_massage.svg"
  },
  {
    "name": "Microdermabrasion",
    "description": "Exfoliating treatment to improve skin texture and tone.",
    "price": "€70",
    "category": "Beauty",
    "image": "/images/services/microdermabrasion.svg"
  },
  {
    "name": "Chemical Peel",
    "description": "Skin resurfacing treatment to reduce fine lines and wrinkles.",
    "price": "€80",
    "category": "Beauty",
    "image": "/images/services/chemical_peel.svg"
  }
];

export default function ServicePage({ lang, setLang, theme, setTheme }: ServicesProps) {
  const categories = ['Hair', 'Beauty', 'Makeup', 'Nails'];

  const t = lang === 'de' ? {
    pageTitle: "Unsere Exklusiven Dienstleistungen",
    categories: {
      Hair: "Haare",
      Beauty: "Schönheit & Wellness",
      Makeup: "Make-up",
      Nails: "Nägel"
    }
  } : {
    pageTitle: "Our Exclusive Services",
    categories: {
      Hair: "Hair",
      Beauty: "Beauty",
      Makeup: "Makeup",
      Nails: "Nails"
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <Navbar lang={lang} setLang={setLang} theme={theme} setTheme={setTheme} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-black mb-4">
            {t.pageTitle}
          </h1>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto"></div>
        </div>

        {categories.map((category) => {
          const categoryServices = services.filter(service => service.category === category);
          if (categoryServices.length === 0) return null;

          const translatedCategoryName = (t.categories as any)[category] || category;

          return (
            <div key={category} className="mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-black border-l-4 border-[#D4AF37] pl-4">
                {translatedCategoryName}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categoryServices.map(service => (
                  <div key={service.name} className="p-6 rounded-2xl bg-white border border-gray-200 shadow-lg hover:border-[#D4AF37] transition-all">
                    <ServiceCard
                      name={service.name}
                      description={service.description}
                      price={service.price}
                      category={translatedCategoryName}
                      image={service.image}
                    />
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>  

      <Footer lang={lang} />
    </div>
  );
}