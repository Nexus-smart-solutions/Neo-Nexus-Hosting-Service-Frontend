import { Input } from "@/components/shadcn/input";
import {
  Search,
  Rocket,
  CreditCard,
  HardDrive,
  Mail,
  Shield,
  ToolCase,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import pictures from "@/constants/pictures";

function Support() {
  const { t } = useTranslation("home");

  const categories = [
    { key: "gettingStarted", icon: Rocket },
    { key: "account", icon: CreditCard },
    { key: "hosting", icon: HardDrive },
    { key: "email", icon: Mail },
    { key: "security", icon: Shield },
    { key: "advanced", icon: ToolCase },
  ];

  return (
    <div className="relative flex flex-col w-full pb-20 overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex flex-col items-center justify-center px-5 md:px-10 lg:px-20 py-20 text-center">
        <img
          src={pictures.bg2}
          alt="support image"
          className="absolute top-0 left-0 w-full h-full object-fill -z-10 rtl:scale-x-[-1]"
        />
        <div className="relative z-10 flex flex-col gap-8 w-full max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-dark">
            {t("support.title")}
          </h1>
          <p className="text-xl text-gray-600">{t("support.subtitle")}</p>

          <div className="relative w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 rtl:left-auto rtl:right-4" />
            <Input
              type="text"
              placeholder={t("support.searchPlaceholder")}
              className="w-full h-14 pl-12 pr-4 text-lg bg-white shadow-lg border-primary/20 focus:ring-primary rtl:pl-4 rtl:pr-12"
            />
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="px-5 md:px-10 lg:px-20 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {categories.map(({ key, icon: Icon }) => (
            <div
              key={key}
              className="group p-8 bg-white border border-gray-100 rounded-sm shadow-sm hover:shadow-md hover:border-primary/50 transition-all cursor-pointer flex flex-col items-center text-center gap-6"
            >
              <div className="w-16 h-16 rounded-full bg-sky-50 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                <Icon className="w-8 h-8 text-primary group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-primary-dark">
                {t(`support.categories.${key}`)}
              </h3>
              <p className="text-gray-500 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore.
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Support;
