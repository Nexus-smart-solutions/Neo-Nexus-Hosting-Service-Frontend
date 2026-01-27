import useLanguageSwitcher from "@/hooks/useLanguageSwitcher";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/shadcn/select";
import { cn } from "@/lib/utils";
import { Globe2 } from "lucide-react";

function LanguageSwitcher({ className }) {
  const { setLanguage, currentLanguage } = useLanguageSwitcher();

  return (
    <Select value={currentLanguage} onValueChange={setLanguage}>
      <SelectTrigger
        className={cn(
          "bg-transparent border-white/50 text-white! hover:bg-white/10 min-w-50 justify-between h-12 px-4 rounded-md",
          className,
        )}
      >
        <Globe2 size={20} strokeWidth={1.5} />
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="en">English - En</SelectItem>
        <SelectItem value="ar">العربية - Ar</SelectItem>
      </SelectContent>
    </Select>
  );
}

export default LanguageSwitcher;
