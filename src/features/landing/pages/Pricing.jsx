import { Button } from "@/components/shadcn/button";
import { cn } from "@/lib/utils";
import { Check, X } from "lucide-react";
import { useTranslation } from "react-i18next";

function Pricing() {
  const { t } = useTranslation("home");

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
    <div className="relative flex flex-col gap-10 items-center justify-start py-16 md:py-24 px-5 md:px-10 lg:px-20 overflow-hidden">
      <img
        src="/particles.png"
        alt=""
        className="absolute top-0  w-full h-full object-cover -z-10"
      />
      <h1 className="text-3xl md:text-5xl font-bold text-primary-dark">
        {t("pricing.title")}
      </h1>
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
                {t("pricing.cta")}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pricing;
