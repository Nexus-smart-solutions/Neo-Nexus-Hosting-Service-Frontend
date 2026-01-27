import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useTranslation } from "react-i18next";

function Testimonials() {
  const { t: home, i18n } = useTranslation("home");
  const [currentIndex, setCurrentIndex] = useState(0);
  const isRtl = i18n.language === "ar";

  const testimonials = [
    {
      text: "Vestibulum faucibus eget erat eget pretium. Donec commodo convallis ligula, eget suscipit orci. Suspendisse potenti.",
      name: "Jean Doe",
      position: "CEO of company.com",
    },
    {
      text: "Vestibulum faucibus eget erat eget pretium. Donec commodo convallis ligula, eget suscipit orci. Suspendisse potenti.",
      name: "Jean Doe",
      position: "CEO of company.com",
    },
    {
      text: "Vestibulum faucibus eget erat eget pretium. Donec commodo convallis ligula, eget suscipit orci. Suspendisse potenti.",
      name: "Jean Doe",
      position: "CEO of company.com",
    },
    {
      text: "Vestibulum faucibus eget erat eget pretium. Donec commodo convallis ligula, eget suscipit orci. Suspendisse potenti.",
      name: "Jean Doe",
      position: "CEO of company.com",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1,
    );
  };

  const percentage = 100 / (window.innerWidth >= 768 ? 2 : 1);

  return (
    <section className="relative w-full py-20 overflow-hidden">
      {/* Background Decor */}
      <img
        src="/particles.png"
        alt=""
        className="absolute top-0 left-0 w-full h-full object-cover -z-10 opacity-50"
      />

      <div className="container mx-auto px-5 md:px-10 lg:px-20 relative">
        <div className="text-center mb-16">
          <span className="text-primary-dark text-xs font-bold uppercase tracking-widest">
            {home("nav.testimonials")}
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold mt-2">
            Interdum Et Malesuada
          </h2>
        </div>

        <div className="relative group max-w-6xl mx-auto">
          {/* Slider Container */}
          <div className="flex gap-8 overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(${isRtl ? "" : "-"}${currentIndex * percentage}%)`,
              }}
            >
              <div className="flex gap-8 px-4 w-full">
                {testimonials.map((item, idx) => (
                  <div
                    key={idx}
                    className="shrink-0 w-full md:w-[calc(50%-16px)] pt-12"
                  >
                    <div className="relative bg-white p-8 pt-16 border border-gray-100 rounded-sm shadow-sm h-full">
                      {/* Quote Icon Bubble */}
                      <div className="absolute -top-10 ltr:left-8 rtl:right-8 w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white shadow-lg">
                        <Quote size={40} className="fill-current" />
                      </div>

                      <div className="space-y-6">
                        <p className="text-gray-500 leading-relaxed text-lg text-start">
                          {item.text}
                        </p>
                        <div className="border-t pt-6 text-start">
                          <h4 className="font-bold text-gray-900">
                            {item.name}
                          </h4>
                          <p className="text-sm text-gray-400">
                            {item.position}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={isRtl ? nextSlide : prevSlide}
            className="absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2 ltr:-translate-x-2 md:ltr:-translate-x-8 rtl:translate-x-2 md:rtl:translate-x-8 w-10 h-10 bg-primary rounded-sm flex items-center justify-center text-white hover:bg-primary/90 transition-colors z-20"
          >
            {isRtl ? <ChevronRight size={24} /> : <ChevronLeft size={24} />}
          </button>
          <button
            onClick={isRtl ? prevSlide : nextSlide}
            className="absolute ltr:right-0 rtl:left-0 top-1/2 -translate-y-1/2 ltr:translate-x-2 md:ltr:translate-x-8 rtl:-translate-x-2 md:rtl:-translate-x-8 w-10 h-10 bg-primary rounded-sm flex items-center justify-center text-white hover:bg-primary/90 transition-colors z-20"
          >
            {isRtl ? <ChevronLeft size={24} /> : <ChevronRight size={24} />}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
