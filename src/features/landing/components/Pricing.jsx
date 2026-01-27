import { Button } from "@/components/shadcn/button";
import { Check, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

function Pricing() {
  const { t: home } = useTranslation("home");

  const plans = [
    {
      title: "PERSONAL",
      price: "3",
      icon: "/home.png",
      features: [
        { text: "Lorem ipsum dolor sit.", active: true },
        { text: "Lorem ipsum dolor sit.", active: true },
        { text: "Lorem ipsum dolor sit.", active: false },
        { text: "Lorem ipsum dolor sit.", active: false },
        { text: "Lorem ipsum dolor sit.", active: false },
        { text: "Lorem ipsum dolor sit.", active: false },
        { text: "Lorem ipsum dolor sit.", active: false },
      ],
      featured: false,
      buttonColor: "",
    },
    {
      title: "STARTUP",
      price: "8",
      icon: "/rocket.png",
      features: [
        { text: "Lorem ipsum dolor sit.", active: true },
        { text: "Lorem ipsum dolor sit.", active: true },
        { text: "Lorem ipsum dolor sit.", active: true },
        { text: "Lorem ipsum dolor sit.", active: true },
        { text: "Lorem ipsum dolor sit.", active: false },
        { text: "Lorem ipsum dolor sit.", active: false },
        { text: "Lorem ipsum dolor sit.", active: false },
      ],
      featured: true,
      buttonColor: "bg-secondary hover:bg-secondary/80",
    },
    {
      title: "COMPANY",
      price: "18",
      icon: "/home-1.png",
      features: [
        { text: "Lorem ipsum dolor sit.", active: true },
        { text: "Lorem ipsum dolor sit.", active: true },
        { text: "Lorem ipsum dolor sit.", active: true },
        { text: "Lorem ipsum dolor sit.", active: true },
        { text: "Lorem ipsum dolor sit.", active: true },
        { text: "Lorem ipsum dolor sit.", active: true },
        { text: "Lorem ipsum dolor sit.", active: false },
      ],
      featured: false,
      buttonColor: "bg-[#00adef] hover:bg-[#0096d1]",
    },
  ];

  return (
    <section className="container relative mx-auto px-5 md:px-10 lg:px-20 py-20">
      <img
        src="/particles.png"
        alt=""
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      />
      <div className="text-center mb-16">
        <span className="text-primary-dark text-xs font-bold uppercase tracking-widest">
          {home("nav.pricing")}
        </span>
        <h2 className="text-3xl md:text-4xl font-semibold mt-2">
          Interdum Et Malesuada
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className={cn(
              "relative bg-white p-2 border border-gray-100 rounded-lg shadow-sm flex flex-col items-center text-center overflow-hidden",
              plan.featured && "ring-2 ring-orange-200",
            )}
          >
            {/* Plan Header */}
            <div
              className={cn(
                "w-full py-8 mb-4 rounded-sm ",
                plan.featured ? "bg-orange-200" : "bg-transparent",
              )}
            >
              <h3
                className={cn(
                  "text-lg font-medium mb-6 tracking-wide",
                  plan.featured ? "text-orange-500" : "",
                )}
              >
                {plan.title}
              </h3>
              <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                <img
                  src={plan.icon}
                  alt={plan.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <div
                className={`space-y-1 ${plan.featured ? "text-orange-500" : "text-gray-600"}`}
              >
                <div className="text-4xl font-bold flex items-center justify-center gap-1">
                  <span className="text-2xl">$</span>
                  {plan.price}
                  <span className="text-sm font-normal">/mo</span>
                </div>
                <p className="text-xs">Lorem ipsum dolor sit.</p>
              </div>
            </div>

            {/* Features List */}
            <ul className="w-full mb-8">
              {plan.features.map((feature, fIdx) => (
                <li
                  key={fIdx}
                  className={cn(
                    "py-3 px-6 text-sm flex items-center gap-3",
                    fIdx % 2 === 0 ? "bg-gray-50/50" : "bg-transparent",
                  )}
                >
                  {feature.active ? (
                    <Check className="w-4 h-4 text-green-500 shrink-0" />
                  ) : (
                    <X className="w-4 h-4 text-red-500 shrink-0" />
                  )}
                  <span
                    className={cn(
                      "text-gray-600",
                      !feature.active && "opacity-50",
                    )}
                  >
                    {feature.text}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <div className="w-full px-6 pb-8">
              <Button
                className={cn(
                  "w-full uppercase font-bold tracking-wider py-6 rounded-sm text-white",
                  plan.buttonColor,
                )}
              >
                {home("pricing.cta")}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Pricing;
