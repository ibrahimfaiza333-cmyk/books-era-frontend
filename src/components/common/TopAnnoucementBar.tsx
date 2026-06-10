"use client";

export default function TopAnnouncementBar() {
  const items = [
    "Matric & Intermediate Books — Updated Editions In Stock",
    "Free Delivery on Orders Over Rs. 10,000",
    "Trusted by 10,000+ Parents mm& Students Nationwide",
  ];

  return (
    <div className="w-full bg-[#e1711c] border-b overflow-hidden">
      <div className="max-w-[1800px] mx-auto">
        <div className="flex items-center gap-20 whitespace-nowrap animate-scroll min-w-max px-6 py-4 text-base font-medium text-white">
          {items.map((item, index) => (
            <div key={index} className="flex items-center gap-8">
              <span>{item}</span>
              {index !== items.length - 1 && (
                <span className="text-white/60">•</span>
              )}
            </div>
          ))}

          {items.map((item, index) => (
            <div key={`dup-${index}`} className="flex items-center gap-8">
              <span>{item}</span>
              {index !== items.length - 1 && (
                <span className="text-white/60">•</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}