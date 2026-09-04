import React from 'react';

export default function WorkingHours() {
  const days = [
    { day: "SUN", time: "Closed", closed: true },
    { day: "MON", time: "9 AM - 5 PM" },
    { day: "TUE", time: "9 AM - 5 PM" },
    { day: "WED", time: "9 AM - 5 PM" },
    { day: "THU", time: "9 AM - 5 PM" },
    { day: "FRI", time: "9 AM - 5 PM" },
    { day: "SAT", time: "10 AM - 4 PM" },
  ];

  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-black mb-2">Working Hours</h2>
        <div className="w-16 h-0.5 bg-[#D4AF37] mx-auto"></div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
        {days.map((item, index) => (
          <div 
            key={index} 
            className="p-5 rounded-2xl bg-white border border-gray-200 shadow-md text-center hover:border-[#D4AF37] transition-all flex flex-col justify-between"
          >
            <span className="font-extrabold text-lg text-black tracking-wider mb-3 block border-b border-gray-100 pb-2">
              {item.day}
            </span>
            <span className={`text-sm font-medium ${item.closed ? 'text-red-500 font-bold' : 'text-gray-600'}`}>
              {item.time}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}