import { useTranslation } from "react-i18next";
import pictures from "@/constants/pictures";

function Benefits() {
  const { t: home } = useTranslation("home");

  return (
    <section className="relative w-full min-h-112.5 md:min-h-125 lg:min-h-150">
      {/* Mobile Background */}
      <div className="absolute inset-0 bg-sky-950 md:hidden" />

      {/* Desktop Background Image */}
      <img
        src={pictures.benefits}
        alt="Benefits Background"
        className="hidden md:block absolute inset-0 w-full h-full object-cover pointer-events-none"
      />

      {/* Content Container */}
      <div className="relative z-10 flex items-center justify-center p-8 md:p-12 lg:p-24 min-h-112.5 md:min-h-125 lg:min-h-150">
        <article className="w-full max-w-lg lg:max-w-xl p-4">
          <div className="text-start">
            <span className="text-secondary md:text-primary-dark text-xs md:text-sm font-bold uppercase tracking-widest block mb-2">
              {home("nav.benefit")}
            </span>
            <h3 className="text-2xl md:text-3xl  font-bold mt-2 mb-8 text-white md:text-foreground leading-tight">
              Interdum Et Malesuada
            </h3>

            <ul className="space-y-4 md:space-y-6">
              {[
                "Cras convallis lacus orci, tristique tincidunt magna consequat in.",
                "In vel pulvinar est, at euismod libero.",
              ].map((text, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 group text-start"
                >
                  <div className="w-2 h-2 rounded-full bg-secondary md:bg-primary-dark mt-2.5 shrink-0" />
                  <p className="text-base md:text-lg lg:text-2xl text-white md:text-gray-800 font-medium leading-relaxed">
                    {text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Benefits;
