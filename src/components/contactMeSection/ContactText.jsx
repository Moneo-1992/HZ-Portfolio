import { useTranslation } from "react-i18next";

const ContactText = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h2 className="text-orange text-3xl mb-4">{t('contact.title2')}</h2>
      <p>
        {t('contact.description')}
      </p>
    </div>
  );
};

export default ContactText;
