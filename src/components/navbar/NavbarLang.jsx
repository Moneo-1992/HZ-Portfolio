
import { useTranslation } from 'react-i18next'

function NavbarLang() {
  const { i18n } = useTranslation()

  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng)
  }

  return (
    <div className='
      hidden sm:flex items-center justify-center gap-2 
      px-4 py-2 rounded-lg
      text-sm'>
      <button
        onClick={() => handleLanguageChange('en')}
        className={i18n.language === 'en' ? 'font-bold underline' : ''}
      >
        EN
      </button>
      <button
        onClick={() => handleLanguageChange('zh')}
        className={i18n.language === 'zh' ? 'font-bold underline' : ''}
      >
        中文
      </button>
    </div>
  )
}

export default NavbarLang