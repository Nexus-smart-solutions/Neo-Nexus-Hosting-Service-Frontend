import { Button } from "@/components/shadcn/button";
import { Phone, Settings, Menu, X } from "lucide-react";
import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import LanguageSwitcher from "@/components/shared/LanguageSwitcher";

function Header() {
  const { t: home } = useTranslation("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const tabs = useMemo(() => {
    return [
      { label: home("nav.home"), href: "/home" },
      // { label: home("nav.features"), href: "/features" },
      // { label: home("nav.promotion"), href: "/promotion" },
      { label: home("nav.hosting"), href: "/hosting" },
      { label: home("nav.services"), href: "/services" },
      { label: home("nav.pricing"), href: "/pricing" },
      { label: home("nav.testimonials"), href: "/testimonials" },
      { label: home("nav.support"), href: "/support" },
    ];
  }, [home]);

  return (
    <header className="relative z-50 bg-white">
      <div className="flex justify-between items-center py-4 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        <NavLink to="/home" className="shrink-0">
          <img
            src="/logo.png"
            alt="logo"
            className="w-auto h-10 md:h-12 object-contain"
          />
        </NavLink>

        {/* Desktop Actions */}
        <div className="hidden md:flex justify-center items-center gap-1">
          <LanguageSwitcher className="text-foreground! border border-gray-200 h-10 min-w-40 ml-4" />
          <div className="flex items-center gap-2 mx-4">
            <Phone size={16} />{" "}
            <span className="text-sm font-medium">+12 345 678 90</span>
          </div>
          <Button variant="ghost" className="uppercase">
            {home("auth.login")}
          </Button>
          <Button variant="secondary" className="uppercase text-xs">
            {home("auth.signup")}
          </Button>
          <Settings
            className="mx-2 text-gray-500 cursor-pointer hover:rotate-90 transition-transform duration-500"
            strokeWidth={3}
          />
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-gray-600 focus:outline-none"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Desktop NavBar */}
      <nav className="hidden md:flex justify-start px-4 md:px-6 lg:px-8 max-w-7xl mx-auto pb-4 gap-6 text-sm lg:text-md">
        {tabs.map((tab) => (
          <NavLink
            key={tab.href}
            to={tab.href}
            className={({ isActive }) =>
              cn(
                "hover:text-primary transition-colors",
                isActive ? "text-primary font-semibold" : "text-gray-600",
              )
            }
          >
            {tab.label}
          </NavLink>
        ))}
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-300 shadow-xl overflow-hidden animate z-40",
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="p-6 space-y-8 h-screen overflow-y-auto pb-10">
          {/* Mobile Nav Links */}
          <nav className="flex flex-col gap-4 justify-center items-center">
            {tabs.map((tab) => (
              <NavLink
                key={tab.href}
                to={tab.href}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "text-lg w-full font-medium py-2 border-b text-center hover:bg-sky-100 animate border-gray-50 rounded-sm",
                    isActive ? "text-primary bg-sky-100 " : "text-gray-700",
                  )
                }
              >
                {tab.label}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Actions */}
          <div className="flex flex-col gap-4 pt-4">
            <div
              dir="ltr"
              className="flex items-center justify-center gap-3 text-gray-600 font-medium pb-2"
            >
              <Phone size={20} />
              <span>+12 345 678 90</span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Button variant="ghost" className="w-full uppercase border">
                {home("auth.login")}
              </Button>
              <Button variant="secondary" className="w-full uppercase">
                {home("auth.signup")}
              </Button>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <span className="font-medium text-gray-700">
                {home("nav.settings")}
              </span>
              <Settings className="text-gray-500" strokeWidth={3} />
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <span className="font-medium text-gray-700">
                {home("nav.language")}
              </span>
              <LanguageSwitcher className="text-foreground! border border-gray-200" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
