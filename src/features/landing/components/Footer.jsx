import { Button } from "@/components/shadcn/button";
import { Input } from "@/components/shadcn/input";
import { useTranslation } from "react-i18next";
import { Facebook, Linkedin, Instagram, X } from "lucide-react";
import CopyRight from "@/components/shared/CopyRight";
import LanguageSwitcher from "@/components/shared/LanguageSwitcher";

function Footer() {
  const { t: home } = useTranslation("home");

  const usersCount = "1 234 567";

  return (
    <footer className="bg-primary-dark relative text-white pt-24 pb-0 overflow-hidden">
      {/* Counter Section */}
      <div className="container mx-auto px-4 text-center mb-16">
        <h2 className="text-6xl font-bold mb-4 tracking-tight" dir="ltr">
          {usersCount}
        </h2>
        <p className="text-lg text-blue-100 opacity-80">
          {home("footer.usersCount")}
        </p>
      </div>

      {/* Newsletter Section */}
      <div className="container mx-auto px-4 max-w-2xl text-center mb-28">
        <p className="text-sm mb-8 opacity-90">{home("footer.subtext")}</p>
        <div className="relative group max-w-lg mx-auto">
          <Input
            type="email"
            placeholder={home("footer.placeholder")}
            className="w-full bg-white/10 border-white/20 text-white placeholder:text-white/50 h-14 ltr:pl-6 ltr:pr-36 rtl:pr-6 rtl:pl-36 rounded-sm focus-visible:ring-0 focus-visible:ring-offset-0 border-2"
          />
          <Button className="absolute ltr:right-1 rtl:left-1 top-1 h-12 font-medium uppercase tracking-wide ">
            {home("footer.cta")}
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-10 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 relative z-10">
          {/* Left Column: Logo & Quick Links */}
          <div className="md:col-span-4 space-y-10">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <img
                  src="/logo.png"
                  alt=""
                  className="w-auto h-12 object-contain"
                />
              </div>
              <p className="text-xs opacity-70 leading-relaxed max-w-xs">
                Integer id orci sed ante tincidunt tincidunt sit amet sed
                libero.
              </p>
            </div>

            <div>
              <h4 className="font-bold uppercase tracking-wider text-xs mb-6 opacity-60">
                Quick Links
              </h4>
              <div className="grid grid-cols-2 gap-y-4 gap-x-2 text-xs font-normal">
                <a href="#" className="hover:text-blue-200 transition-colors">
                  Sed imperdiet enim.
                </a>
                <a href="#" className="hover:text-blue-200 transition-colors">
                  Vivamus sit amet.
                </a>
                <a href="#" className="hover:text-blue-200 transition-colors">
                  Cras convallis lacus
                </a>
                <a href="#" className="hover:text-blue-200 transition-colors">
                  Integer orci justo.
                </a>
                <a href="#" className="hover:text-blue-200 transition-colors">
                  Nam posuere accumsan.
                </a>
                <a href="#" className="hover:text-blue-200 transition-colors">
                  Integer id orci sed
                </a>
              </div>
            </div>
          </div>

          {/* Middle Column: News */}
          <div className="md:col-span-4 space-y-6 md:pt-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex gap-4">
                <div className="w-18 h-14 bg-gray-500 rounded-sm overflow-hidden shrink-0">
                  <img
                    src={`https://picsum.photos/id/${i + 20}/100/100`}
                    alt="news"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-1">
                  <h5 className="font-bold text-[10px] uppercase opacity-70 tracking-widest text-sky-400">
                    News
                  </h5>
                  <p className="text-[12px] opacity-80 leading-snug">
                    Sed imperdiet enim ligula vitae viverra.
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Socials & Settings */}
          <div className="md:col-span-4 flex flex-col items-start md:items-end gap-10 space-y-8 md:space-y-0">
            <div className="flex gap-4">
              {[
                { icon: Facebook, fill: "white" },
                { icon: Linkedin, fill: "white" },
                { icon: X, fill: "white" },
                { icon: Instagram },
              ].map((social, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <social.icon
                    size={20}
                    fill={social.fill ? "white" : "none"}
                  />
                </a>
              ))}
            </div>

            <LanguageSwitcher />
          </div>
        </div>
      </div>

      {/* Buildings Decoration */}
      <div className="relative h-40">
        <img
          src="/Buildings.png"
          alt="buildings"
          className="absolute bottom-0 left-0 w-full h-full object-cover pointer-events-none"
        />

        {/* Bottom Bar */}
        <div>
          <CopyRight />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
