import { useState, useEffect } from 'react';

const themes = [
  { id: 'dark-medium', name: 'Dark Medium (Default)' },
  { id: 'dark-soft', name: 'Dark Soft' },
  { id: 'dark-hard', name: 'Dark Hard' },
  { id: 'light-medium', name: 'Light Medium' },
  { id: 'light-soft', name: 'Light Soft' },
  { id: 'light-hard', name: 'Light Hard' },
];

export function ThemeControls() {
  const [currentTheme, setCurrentTheme] = useState('dark-medium');
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isDyslexic, setIsDyslexic] = useState(false);
  const [isLargeText, setIsLargeText] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Load persisted settings
    const savedTheme = localStorage.getItem('theme') || 'dark-medium';
    const savedContrast = localStorage.getItem('highContrast') === 'true';
    const savedDyslexic = localStorage.getItem('dyslexicFont') === 'true';
    const savedLargeText = localStorage.getItem('largeText') === 'true';

    setCurrentTheme(savedTheme);
    setIsHighContrast(savedContrast);
    setIsDyslexic(savedDyslexic);
    setIsLargeText(savedLargeText);

    // Apply settings
    document.documentElement.setAttribute('data-theme', savedTheme);
    document.documentElement.classList.toggle('high-contrast', savedContrast);
    document.body.classList.toggle('font-dyslexic', savedDyslexic);
    document.body.classList.toggle('text-large', savedLargeText);
  }, []);

  const handleThemeChange = (themeId: string) => {
    setCurrentTheme(themeId);
    localStorage.setItem('theme', themeId);
    document.documentElement.setAttribute('data-theme', themeId);
  };

  const toggleContrast = () => {
    const newState = !isHighContrast;
    setIsHighContrast(newState);
    localStorage.setItem('highContrast', String(newState));
    document.documentElement.classList.toggle('high-contrast', newState);
  };

  const toggleDyslexic = () => {
    const newState = !isDyslexic;
    setIsDyslexic(newState);
    localStorage.setItem('dyslexicFont', String(newState));
    document.body.classList.toggle('font-dyslexic', newState);
  };

  const toggleLargeText = () => {
    const newState = !isLargeText;
    setIsLargeText(newState);
    localStorage.setItem('largeText', String(newState));
    document.body.classList.toggle('text-large', newState);
  };

  return (
    <div className="fixed top-1/2 -translate-y-1/2 right-4 z-[100] flex flex-col items-end">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[var(--color-bg-soft)] text-[var(--color-fg-primary)] border border-[var(--color-bg-hard)] p-2 rounded-sm shadow-lg font-bold hover:bg-[var(--color-bg-hard)] transition-colors"
        aria-label="Toggle Accessibilty Menu"
      >
        AA
      </button>

      {isOpen && (
        <div className="absolute top-0 right-12 w-64 bg-[var(--color-bg-medium)] border-2 border-[var(--color-fg-secondary)] shadow-2xl p-4 rounded-sm flex flex-col gap-4 -translate-y-1/2">
          <div>
            <h3 className="text-[var(--color-red)] font-bold mb-2 uppercase text-xs tracking-wider">Color Theme</h3>
            <div className="grid grid-cols-1 gap-1">
              {themes.map(t => (
                <button
                  key={t.id}
                  onClick={() => handleThemeChange(t.id)}
                  className={`text-left px-2 py-1 text-sm rounded-sm ${currentTheme === t.id ? 'bg-[var(--color-blue)] text-[var(--color-bg-hard)] font-bold' : 'text-[var(--color-fg-primary)] hover:bg-[var(--color-bg-hard)]'}`}
                >
                  {t.name}
                </button>
              ))}
            </div>
          </div>

          <div className="border-t border-[var(--color-bg-hard)] pt-4">
            <h3 className="text-[var(--color-yellow)] font-bold mb-2 uppercase text-xs tracking-wider">Accessibility</h3>
            <div className="space-y-2">
              <label className="flex items-center gap-2 cursor-pointer text-[var(--color-fg-primary)] text-sm">
                <input
                  type="checkbox"
                  checked={isHighContrast}
                  onChange={toggleContrast}
                  className="accent-[var(--color-red)]"
                />
                High Contrast
              </label>
              <label className="flex items-center gap-2 cursor-pointer text-[var(--color-fg-primary)] text-sm">
                <input
                  type="checkbox"
                  checked={isLargeText}
                  onChange={toggleLargeText}
                  className="accent-[var(--color-green)]"
                />
                Enlarged Text
              </label>
              <label className="flex items-center gap-2 cursor-pointer text-[var(--color-fg-primary)] text-sm">
                <input
                  type="checkbox"
                  checked={isDyslexic}
                  onChange={toggleDyslexic}
                  className="accent-[var(--color-blue)]"
                />
                Dyslexia Friendly Font
              </label>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
