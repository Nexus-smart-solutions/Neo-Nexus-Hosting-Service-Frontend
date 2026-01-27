import { useTranslation } from "react-i18next";

function CopyRight({ className }) {
  const { t } = useTranslation();

  return (
    <div
      className={
        "flex justify-center items-center gap-2 text-white text-xs " + className
      }
    >
      {t("footer.copyright", { year: new Date().getFullYear() })}
      <img src="Nexus.png" alt="Nexus" className="w-auto h-4" />
    </div>
  );
}

export default CopyRight;
