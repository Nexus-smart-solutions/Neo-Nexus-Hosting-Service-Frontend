import { Button } from "@/components/shadcn/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/shadcn/select";
import { Search } from "lucide-react";
import pictures from "@/constants/pictures";
import { useTranslation } from "react-i18next";

function Hero() {
  const { t: hero } = useTranslation("home");
  const tlds = [
    ".com",
    ".org",
    ".net",
    ".edu",
    ".gov",
    ".io",
    ".co",
    ".ai",
    ".app",
    ".dev",
    ".info",
    ".biz",
    ".me",
    ".tech",
    ".xyz",
    ".online",
    ".store",
    ".site",
    ".blog",
    ".cloud",
  ];

  return (
    <div className="relative flex flex-col gap-10 mb-10 items-center justify-center py-12 md:py-24 lg:py-30 px-5 md:px-10 lg:px-20 overflow-hidden">
      {/* background */}
      {/* <div className="absolute top-0 left-0 right-0 w-full h-full bg-sky-200 -z-10 min-h-100 md:min-h-125 lg:min-h-150" /> */}
      <img
        src={pictures.bg}
        alt=""
        className="absolute bottom-0 left-0 w-full h-full object-cover md:object-fill -z-5 min-h-100 md:min-h-125 lg:min-h-150"
      />
      <article className="text-center flex flex-col gap-4 max-w-full md:max-w-[80vw] mx-auto z-10">
        <h1 className="text-2xl capitalize md:text-4xl lg:text-5xl font-bold text-primary-dark leading-tight">
          {hero("hero.title")}
        </h1>
        <p className="text-base md:text-xl lg:text-2xl text-gray-500">
          {hero("hero.description")}
        </p>
      </article>

      {/* Select Domain */}
      <div className="bg-white p-3 md:p-4 my-4 w-full max-w-4xl lg:min-w-[60vw] flex flex-col md:flex-row justify-between items-stretch md:items-center gap-4 md:gap-8 rounded-sm shadow-sm z-10">
        <span className="hidden lg:flex shrink-0 font-medium">
          {hero("hero.domainInput")}
        </span>
        <div className="flex-1 min-w-0">
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder={hero("hero.domainSelect")} />
            </SelectTrigger>
            <SelectContent>
              {tlds.map((tld) => (
                <SelectItem key={tld} value={tld}>
                  {tld}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <Button className="uppercase font-normal px-8 h-12 md:h-10">
          <Search className="w-4 h-4 mr-2" />
          {hero("hero.search")}
        </Button>
      </div>

      {/* Offers */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-12 md:mt-20 w-full max-w-5xl mx-auto z-10 px-4">
        <img
          src={pictures.offer1}
          alt="Special Offer"
          className="w-48 md:w-auto h-auto md:h-60 object-contain shrink-0"
        />
        <article className="text-center md:text-start">
          <h2 className="text-xl md:text-3xl lg:text-4xl font-medium text-secondary mb-3 leading-tight">
            {hero("hero.offerTitle")}
          </h2>
          <p className="text-base md:text-xl lg:text-2xl text-gray-500 leading-relaxed">
            {hero("hero.offerDescription")}
          </p>
        </article>
      </div>
    </div>
  );
}

export default Hero;
