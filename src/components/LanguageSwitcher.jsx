import { useTranslation } from "react-i18next";

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  return (
    <div className="language-switcher">
      <select
        value={i18n.language}
        onChange={(e) =>
          i18n.changeLanguage(e.target.value)
        }
      >
        <option value="en">🇺🇸 English</option>

        <option value="te">🇮🇳 తెలుగు</option>
      </select>
    </div>
  );
}

export default LanguageSwitcher;