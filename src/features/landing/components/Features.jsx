import SectionSeparator from "./SectionSeparator";
import { useTranslation } from "react-i18next";
import pictures from "@/constants/pictures";

function Features() {
  const { t: home } = useTranslation("home");

  const gridFeatures = [
    {
      title: "Easy Customizing",
      description:
        "Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. Interdum et malesuada fames.",
      src: "/feature1.png",
    },
    {
      title: "Multiple Connection",
      description:
        "Pellentesque ullamcorper aliquet ultrices. Aenean facilisis vitae purus facilisis semper.",
      src: "/feature2.png",
    },
    {
      title: "24/7 Customers Supports",
      description:
        "Curabitur egestas consequat lorem, vel fermentum augue porta id. Aliquam lobortis magna neque.",
      src: "/feature3.png",
    },
  ];

  return (
    <section className="container mx-auto px-5 md:px-10 lg:px-20 py-20 flex flex-col gap-24">
      {/* Top Section: Features Grid */}
      <div className="text-center">
        <span className="text-primary-dark text-xs font-bold uppercase tracking-widest">
          {home("nav.features")}
        </span>
        <h2 className="text-3xl md:text-4xl font-semibold mt-2 mb-16">
          Interdum Et Malesuada
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {gridFeatures.map((feature, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <div className="w-40 h-40 mb-6 flex items-center justify-center">
                <img
                  src={feature.src || "/logo.png"}
                  alt={feature.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <SectionSeparator />

      {/* Feature 1: Easy Integrations */}
      <div className="flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1">
          <img
            src={"/feature4.png"}
            alt="Easy Integrations"
            className="w-full max-w-md mx-auto"
          />
        </div>
        <div className="flex-1 text-center md:text-start">
          <span className="text-primary-dark text-xs font-bold uppercase tracking-widest">
            Easy Integrations
          </span>
          <h3 className="text-3xl font-semibold mt-2 mb-6">
            Interdum Et Malesuada
          </h3>
          <p className="text-gray-500 text-lg">
            Cras convallis lacus orci, tristique tincidunt magna consequat in.
            In vel pulvinar est, at euismod libero.
          </p>
        </div>
      </div>

      <SectionSeparator />

      {/* Feature 2: Smart Deployment */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-16">
        <div className="flex-1">
          <img
            src="/feature5.png"
            alt="Smart Deployment"
            className="w-full max-w-md mx-auto"
          />
        </div>
        <div className="flex-1 text-center md:text-start">
          <span className="text-primary-dark text-xs font-bold uppercase tracking-widest">
            Smart Deployment
          </span>
          <h3 className="text-3xl font-semibold mt-2 mb-6">
            Curabitur egestas consequat
          </h3>
          <p className="text-gray-500 text-lg">
            Cras convallis lacus orci, tristique tincidunt magna consequat in.
            In vel pulvinar est, at euismod libero.
          </p>
        </div>
      </div>

      <SectionSeparator />

      {/* Feature 3: Realtime Monitoring */}
      <div className="text-center">
        <span className="text-primary-dark text-xs font-bold uppercase tracking-widest">
          Realtime Monitoring
        </span>
        <h3 className="text-3xl font-semibold mt-2 mb-6">
          Aenean sit amet magna
        </h3>
        <p className="text-gray-500 text-lg max-w-3xl mx-auto mb-16">
          Cras convallis lacus orci, tristique tincidunt magna consequat in. In
          vel pulvinar est, at euismod libero.
        </p>
        <div className="w-full overflow-hidden">
          <img
            src={pictures.feature6}
            alt="Realtime Monitoring"
            className="w-full max-w-4xl mx-auto"
          />
        </div>
      </div>
    </section>
  );
}

export default Features;
