import ExperienceInfo from "./ExperienceInfo";
import { useTranslation } from "react-i18next";
const ExperienceTopLeft = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-6 w-[300px]">
      <p className="text-orange font-bold uppercase text-3xl font-special text-center">
        {t("experience.title2")}
      </p>
      <div className="flex justify-center items-center gap-4">
        <ExperienceInfo number={t('experience.years')} text="Years" />
        <p className="font-bold text-6xl text-lightBrown">-</p>
        <ExperienceInfo number={t('experience.projects')} text="Projects" />
      </div>
      <p className="text-center">
        {t("experience.description")}
      </p>
      {/* <ExperienceInfo number="$100k" text="Max Budget" /> */}
    </div>
  );
};

export default ExperienceTopLeft;
