import { ShieldCheck, Check } from "lucide-react";
import { useTranslation } from "react-i18next";
import pictures from "@/constants/pictures";

function Services() {
  const { t } = useTranslation("home");

  const services = ["performance", "security", "management"];
  const perfectFor = [
    { key: "startups", icon: "/rocket.png" },
    { key: "smallBusiness", icon: "/home.png" },
    { key: "portfolio", icon: "/home-1.png" },
  ];

  return (
    <div className="relative flex flex-col w-full pb-20 overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] flex flex-col justify-center px-5 md:px-10 lg:px-20 py-20">
        <img
          src={pictures.bg2}
          alt="services image"
          className="absolute top-0 left-0 w-full h-full object-fill -z-10 rtl:scale-x-[-1]"
        />
        <article className="relative z-10 flex flex-col gap-6 max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-dark leading-tight">
            {t("services.hero.title")}
          </h1>
          <div className="flex flex-col gap-4">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-700">
              {t("services.hero.subtitle")}
            </h2>
            <p className="text-base md:text-lg text-gray-500 leading-relaxed max-w-xl">
              {t("services.hero.description")}
            </p>
          </div>
        </article>
      </section>

      {/* Features Grid */}
      <section className="px-5 md:px-10 lg:px-20 py-20 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 overflow-hidden">
          {services.map((service) => (
            <div
              key={service}
              className={`p-4 py-10 flex flex-col gap-6 items-center text-center border border-primary rounded-sm hover:bg-sky-100 animate `}
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className=" text-white" fill="#00adef" size={48} />
                <h3 className="text-xl font-bold text-primary-dark">
                  {t(`services.features.${service}.title`)}
                </h3>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                {t(`services.features.${service}.description`)}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Perfect For Section */}
      <section className="px-5 md:px-10 lg:px-20 py-20 bg-gray-50/30">
        <div className="flex flex-col gap-12 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-primary-dark">
            {t("services.perfectFor.title")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto w-full">
            {perfectFor.map((item) => (
              <div
                key={item.key}
                className="bg-white p-6 rounded-sm shadow-sm border border-gray-100 flex items-center gap-6 hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center overflow-hidden shrink-0">
                  <img
                    src={item.icon}
                    alt={t(`services.perfectFor.${item.key}`)}
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <span className="text-lg font-bold text-gray-700">
                  {t(`services.perfectFor.${item.key}`)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative py-24 px-5 md:px-10 lg:px-20 overflow-hidden">
        <img
          src={pictures.whyBg}
          alt="why choose us section"
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        />
        <div className="relative z-10 flex flex-col items-center gap-12 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            {t("services.whyChoose.title")}
          </h2>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {["uptime", "backups", "support"].map((item) => (
              <div key={item} className="flex items-center gap-3 text-white">
                <Check className="w-5 h-5 text-white" strokeWidth={3} />
                <span className="text-lg font-medium tracking-wide">
                  {t(`services.whyChoose.${item}`)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
