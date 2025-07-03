
import { useTranslation } from "react-i18next";
const SkillsText = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center mt-[100px]">
      <h2 className="text-6xl text-cyan mb-10">{t('skills.title')}</h2>
      <p className="text-lg text-center">
        {t('skills.description')}
      </p>
    </div>
  );
};

export default SkillsText;
