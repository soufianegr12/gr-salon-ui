import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface FormData {
  name: string;
  email: string;
  date: string;
  service: string;
}

interface Errors {
  name?: string;
  email?: string;
  date?: string;
  service?: string;
  form?: string;
}

interface BookingFormProps {
  lang: string;
  setLang: (lang: string) => void;
  theme: string;
  setTheme: (theme: string) => void;
}

export default function BookingForm({ lang, setLang, theme, setTheme }: BookingFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    date: '',
    service: '',
  });

  const [errors, setErrors] = useState<Errors>({});
  const [successMessage, setSuccessMessage] = useState('');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // ترجمة النصوص حسب اللغة المختارة
  const t = lang === 'de' ? {
    title: "Termin Buchen",
    nameLabel: "Name",
    namePlaceholder: "Ihr Name",
    emailLabel: "E-Mail-Adresse",
    emailPlaceholder: "Ihre E-Mail",
    dateLabel: "Datum",
    serviceLabel: "Dienstleistung",
    selectService: "Bitte wählen Sie eine Leistung",
    hair: "Haarschnitt & Styling",
    nails: "Maniküre & Nägel",
    bridal: "Braut-Make-up",
    beauty: "Schönheit & Wellness",
    submitBtn: "Termin Bestätigen",
    success: "Termin erfolgreich gebucht!",
    errName: "Name ist erforderlich",
    errEmail: "E-Mail ist erforderlich",
    errEmailInvalid: "Ungültige E-Mail-Adresse",
    errDate: "Datum ist erforderlich",
    errService: "Dienstleistung ist erforderlich",
    errGeneral: "Fehler beim Buchen. Bitte versuchen Sie es später erneut."
  } : {
    title: "Book an Appointment",
    nameLabel: "Name",
    namePlaceholder: "Your Name",
    emailLabel: "Email Address",
    emailPlaceholder: "Your Email",
    dateLabel: "Date",
    serviceLabel: "Service",
    selectService: "Select Service",
    hair: "Hair & Styling",
    nails: "Nails & Manicure",
    bridal: "Bridal Makeup",
    beauty: "Beauty & Wellness",
    submitBtn: "Book Appointment",
    success: "Appointment booked successfully!",
    errName: "Name is required",
    errEmail: "Email is required",
    errEmailInvalid: "Email is invalid",
    errDate: "Date is required",
    errService: "Service is required",
    errGeneral: "Failed to book appointment. Please try again."
  };

  const validate = (): Errors => {
    const tempErrors: Errors = {};
    if (!formData.name) tempErrors.name = t.errName;
    if (!formData.email) {
      tempErrors.email = t.errEmail;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = t.errEmailInvalid;
    }
    if (!formData.date) tempErrors.date = t.errDate;
    if (!formData.service) tempErrors.service = t.errService;
    return tempErrors;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const handleSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault();
    const tempErrors = validate();
    if (Object.keys(tempErrors).length > 0) {
      setErrors(tempErrors);
      return;
    }

    try {
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccessMessage(t.success);
        setFormData({ name: '', email: '', date: '', service: '' });
      } else {
        setErrors({ form: t.errGeneral });
      }
    } catch (error) {
      setErrors({ form: t.errGeneral });
    }
  };

  if (!isClient) return null;

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans flex flex-col justify-between">
      <Navbar lang={lang} setLang={setLang} theme={theme} setTheme={setTheme} />
      
      <main className="flex-grow flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-xl p-8 sm:p-12 rounded-3xl bg-white border border-gray-200 shadow-2xl">
          
          <h1 className="text-3xl font-extrabold text-center text-black mb-2">
            {t.title}
          </h1>
          <div className="w-16 h-0.5 bg-[#D4AF37] mx-auto mb-8"></div>

          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Name Field */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="name">
                {t.nameLabel}
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder={t.namePlaceholder}
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-5 py-3.5 rounded-xl bg-gray-50 border ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none transition-all text-black`}
              />
              {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="email">
                {t.emailLabel}
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder={t.emailPlaceholder}
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-5 py-3.5 rounded-xl bg-gray-50 border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none transition-all text-black`}
              />
              {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
            </div>

            {/* Date Field */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="date">
                {t.dateLabel}
              </label>
              <input
                type="date"
                name="date"
                id="date"
                value={formData.date}
                onChange={handleChange}
                className={`w-full px-5 py-3.5 rounded-xl bg-gray-50 border ${errors.date ? 'border-red-500' : 'border-gray-300'} focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none transition-all text-black`}
              />
              {errors.date && <p className="mt-1 text-xs text-red-500">{errors.date}</p>}
            </div>

            {/* Service Selection */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="service">
                {t.serviceLabel}
              </label>
              <select
                name="service"
                id="service"
                value={formData.service}
                onChange={handleChange}
                className={`w-full px-5 py-3.5 rounded-xl bg-gray-50 border ${errors.service ? 'border-red-500' : 'border-gray-300'} focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none transition-all text-black`}
              >
                <option value="">{t.selectService}</option>
                <option value="hair">{t.hair}</option>
                <option value="nails">{t.nails}</option>
                <option value="bridal">{t.bridal}</option>
                <option value="beauty">{t.beauty}</option>
              </select>
              {errors.service && <p className="mt-1 text-xs text-red-500">{errors.service}</p>}
            </div>

            {errors.form && (
              <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-600 text-sm text-center">
                {errors.form}
              </div>
            )}

            {successMessage && (
              <div className="p-3 rounded-lg bg-green-50 border border-green-200 text-green-700 text-sm text-center font-semibold">
                {successMessage}
              </div>
            )}

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-black font-extrabold shadow-lg hover:opacity-95 transition-all mt-4"
            >
              {t.submitBtn}
            </button>
          </form>

        </div>
      </main>

      <Footer lang={lang} />
    </div>
  );
}