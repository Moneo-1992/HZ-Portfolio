import { useTranslation } from 'react-i18next'

const NavbarLogo = () => {
  const { t } = useTranslation()
  
  return (
    <div className='flex items-center justify-center'>
      <h1 className="text-white text-lg sm:text-sm md:text-2xl sm:block md:block">
        {t('welcome')}
      </h1>
      
    </div>
  );
};

export default NavbarLogo;