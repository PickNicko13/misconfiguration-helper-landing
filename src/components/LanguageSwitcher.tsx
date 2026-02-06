import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

export function LanguageSwitcher() {
    const { i18n } = useTranslation();
    const [currentLang, setCurrentLang] = useState(i18n.language);

    useEffect(() => {
        // Persist language choice in localStorage
        const savedLang = localStorage.getItem('language');
        if (savedLang && ['uk', 'en'].includes(savedLang)) {
            i18n.changeLanguage(savedLang);
            setCurrentLang(savedLang);
        }
    }, [i18n]);

    const changeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
        localStorage.setItem('language', lang);
        setCurrentLang(lang);
    };

    return (
        <div className="flex gap-1 bg-[var(--color-bg-soft)] border border-[var(--color-bg-hard)] rounded-sm shadow-md overflow-hidden">
            <button
                onClick={() => changeLanguage('uk')}
                className={`px-3 py-1 text-xs font-black uppercase transition-colors cursor-pointer ${currentLang === 'uk'
                        ? 'bg-[var(--color-fg-primary)] text-[var(--color-bg-hard)]'
                        : 'text-[var(--color-fg-primary)] hover:bg-[var(--color-bg-hard)]'
                    }`}
                aria-label="Switch to Ukrainian"
            >
                UA
            </button>
            <button
                onClick={() => changeLanguage('en')}
                className={`px-3 py-1 text-xs font-black uppercase transition-colors cursor-pointer ${currentLang === 'en'
                        ? 'bg-[var(--color-fg-primary)] text-[var(--color-bg-hard)]'
                        : 'text-[var(--color-fg-primary)] hover:bg-[var(--color-bg-hard)]'
                    }`}
                aria-label="Switch to English"
            >
                EN
            </button>
        </div>
    );
}
