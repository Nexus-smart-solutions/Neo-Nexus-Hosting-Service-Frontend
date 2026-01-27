import { useTranslation } from "react-i18next";
import pictures from "@/constants/pictures";

function Hosting() {
  const { t } = useTranslation("home");

  const cards = ["cloud", "vps", "dedicated", "wordpress", "email", "domains"];

  return (
    <div className="relative flex flex-col items-center justify-start min-h-[90vh] mb-10 py-16 md:py-24 px-5 md:px-10 lg:px-20 overflow-hidden">
      <img
        src={pictures.bg}
        alt="hosting image"
        className="absolute top-0 min-w-[1000px] w-full min-h-[85vh] h-full object-fill -z-10"
      />

      {/* Header Content */}
      <div className="relative z-10 text-center flex flex-col gap-4 mb-16 max-w-4xl">
        <h1 className="text-3xl md:text-5xl font-bold text-primary-dark">
          {t("hosting.title")}
        </h1>
        <p className="text-lg md:text-xl text-gray-600">
          {t("hosting.subtitle")}
        </p>
      </div>

      {/* Cards Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl mx-auto">
        {cards.map((cardKey) => (
          <div
            key={cardKey}
            className="flex flex-col rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-[1.02]"
          >
            {/* Upper half - Light Orange/Beige */}
            <div className="bg-orange-200 p-8 flex-1 flex flex-col items-center text-center gap-4">
              <h3 className="text-xl md:text-2xl font-bold text-sky-500">
                {t(`hosting.cards.${cardKey}.title`)}
              </h3>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                {t(`hosting.cards.${cardKey}.description`)}
              </p>
              <p className="font-bold text-gray-900 mt-2">
                {t(`hosting.cards.${cardKey}.tagline`)}
              </p>
            </div>
            {/* Lower half - Blue Button */}
            <button className="bg-sky-500 hover:bg-sky-600 text-white font-semibold py-4 transition-colors">
              {t("hosting.viewDetails")}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hosting;
