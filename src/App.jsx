import AppRoutes from "@/routes/AppRoutes";
import { useEffect, useState } from "react";
import i18n from "./i18n";
import { DirectionProvider } from "@radix-ui/react-direction";
import { Toaster } from "react-hot-toast";

function App() {
  const [dir, setDir] = useState(i18n.language === "ar" ? "rtl" : "ltr");

  useEffect(() => {
    const handleLang = (lng) => setDir(lng === "ar" ? "rtl" : "ltr");
    i18n.on("languageChanged", handleLang);
    return () => i18n.off("languageChanged", handleLang);
  }, []);

  return (
    <DirectionProvider dir={dir}>
      <AppRoutes />
      <Toaster position="top-center" />
    </DirectionProvider>
  );
}

export default App;
