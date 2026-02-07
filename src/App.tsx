import { useTranslation } from 'react-i18next';
import { ThemeControls } from './components/ThemeControls';
import { SSULogo } from './components/SSULogo';
import { LanguageSwitcher } from './components/LanguageSwitcher';

function App() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-[var(--color-bg-hard)] text-[var(--color-fg-primary)] flex flex-col font-sans transition-colors duration-200">
      <header className="bg-[var(--color-bg-medium)] border-b border-[var(--color-bg-soft)] sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
          <h1 className="text-lg font-bold flex items-center gap-3">
            <SSULogo className="w-8 h-8" />
            <span className="tracking-tight uppercase">{t('header.title')}</span>
          </h1>
          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <ThemeControls />
          </div>
        </div>
      </header>

      <main role="main" className="flex-grow">
        <section className="max-w-6xl mx-auto px-4 py-12 md:py-20 flex flex-col md:flex-row items-center gap-10">
          <article className="flex-1 space-y-4">
            <h1 className="text-3xl md:text-5xl font-black text-[var(--color-red)] leading-tight uppercase">
              {t('hero.title')}
            </h1>
            <p className="text-lg text-[var(--color-fg-secondary)] leading-snug max-w-xl">
              {t('hero.description')}
              <span className="block mt-2 font-bold text-[var(--color-aqua)]">{t('hero.subtitle')}</span>
            </p>
          </article>
          <div className="flex-1 w-full flex justify-center">
            <div className="border-4 border-[var(--color-bg-soft)] p-2 bg-[var(--color-bg-medium)] shadow-[8px_8px_0_0_var(--color-bg-soft)]">
              <img
                src="example.webp"
                alt={t('hero.imageAlt')}
                loading="lazy"
                className="w-full max-w-lg object-cover grayscale opacity-80"
              />
            </div>
          </div>
        </section>

        <section className="bg-[var(--color-bg-medium)] py-12 border-y border-[var(--color-bg-soft)]">
          <div className="max-w-6xl mx-auto px-4 space-y-12">

            <article>
              <h2 className="text-xl font-bold text-[var(--color-orange)] mb-4 uppercase tracking-widest border-l-4 border-[var(--color-orange)] pl-3">
                {t('keywords.title')}
              </h2>
              <div className="flex flex-wrap gap-2">
                {(t('keywords.list', { returnObjects: true }) as string[]).map((keyword) => (
                  <span key={keyword} className="px-2 py-1 bg-[var(--color-bg-soft)] text-[var(--color-fg-primary)] border border-[var(--color-gray)] text-xs font-bold uppercase">
                    {keyword}
                  </span>
                ))}
              </div>
            </article>

            <article className="text-[var(--color-fg-secondary)] max-w-none grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-xl font-bold text-[var(--color-yellow)] mb-4 uppercase tracking-widest border-l-4 border-[var(--color-yellow)] pl-3">
                  {t('relevance.title')}
                </h2>
                <div className="space-y-3 leading-relaxed">
                  <p>{t('relevance.paragraph1')}</p>
                  <p>{t('relevance.paragraph2')}</p>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[var(--color-blue)] mb-4 uppercase tracking-widest border-l-4 border-[var(--color-blue)] pl-3">
                  {t('goal.title')}
                </h2>
                <div className="bg-[var(--color-bg-soft)] p-5 border border-[var(--color-bg-hard)]">
                  <p className="text-[var(--color-fg-primary)] leading-normal italic">
                    {t('goal.text')}
                  </p>
                </div>
              </div>
            </article>

            <article>
              <h2 className="text-xl font-bold text-[var(--color-purple)] mb-6 uppercase tracking-widest border-l-4 border-[var(--color-purple)] pl-3">
                {t('tasks.title')}
              </h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-1">
                {(t('tasks.list', { returnObjects: true }) as string[]).map((task, index) => (
                  <div key={index} className="flex items-center gap-3 bg-[var(--color-bg-hard)] p-3 border border-[var(--color-bg-soft)]">
                    <span className="text-[var(--color-purple)] font-black text-lg">0{index + 1}</span>
                    <span className="font-bold leading-tight">{task}</span>
                  </div>
                ))}
              </div>
            </article>

            <article className="grid md:grid-cols-2 gap-8 pt-8 border-t border-[var(--color-bg-soft)]">
              <div>
                <h2 className="text-xl font-bold text-[var(--color-aqua)] mb-4 uppercase tracking-widest">
                  {t('methodology.title')}
                </h2>
                <ul className="space-y-1 font-bold">
                  <li className="flex justify-between border-b border-[var(--color-bg-soft)] pb-1">
                    <span>{t('methodology.language')}</span>
                    <span className="text-[var(--color-fg-primary)]">{t('methodology.languageValue')}</span>
                  </li>
                  <li className="flex justify-between border-b border-[var(--color-bg-soft)] pb-1">
                    <span>{t('methodology.cliFramework')}</span>
                    <span className="text-[var(--color-fg-primary)]">{t('methodology.cliFrameworkValue')}</span>
                  </li>
                  <li className="flex justify-between border-b border-[var(--color-bg-soft)] pb-1">
                    <span>{t('methodology.httpClients')}</span>
                    <span className="text-[var(--color-fg-primary)]">{t('methodology.httpClientsValue')}</span>
                  </li>
                  <li className="flex justify-between border-b border-[var(--color-bg-soft)] pb-1">
                    <span>{t('methodology.library')}</span>
                    <span className="text-[var(--color-fg-primary)]">{t('methodology.libraryValue')}</span>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-xl font-bold text-[var(--color-green)] mb-4 uppercase tracking-widest">
                  {t('results.title')}
                </h2>
                <ul className="space-y-2">
                  {(t('results.list', { returnObjects: true }) as string[]).map((result, index) => (
                    <li key={index} className="flex gap-2">
                      <span className="text-[var(--color-green)]">■</span>
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>

            <article className="pt-12 border-t border-[var(--color-bg-soft)]">
              <div className="flex flex-col md:flex-row justify-around items-center gap-8">
                <div className="space-y-4 text-center md:text-left">
                  <h2 className="text-2xl font-black uppercase tracking-tighter">{t('materials.title')}</h2>
                  <a
                    href="https://github.com/PickNicko13/misconfiguration-helper"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-fg-primary)] text-[var(--color-bg-hard)] font-black uppercase text-sm hover:bg-[var(--color-bg-hard)] hover:text-[var(--color-fg-primary)] hover:outline hover:outline-2 hover:outline-[var(--color-fg-primary)] transition-all active:translate-y-1"
                  >
                    {t('materials.githubLink')}
                  </a>
                </div>
                <div className="p-6 bg-[var(--color-bg-soft)] border-2 border-[var(--color-fg-secondary)] min-w-[300px]">
                  <span className="block text-[var(--color-gray)] uppercase text-[10px] font-black tracking-widest mb-2">{t('author.label')}</span>
                  <p className="text-lg font-black uppercase leading-tight">{t('author.name')}</p>
                  <p className="text-sm font-bold text-[var(--color-yellow)] uppercase">{t('author.group')}</p>
                </div>
              </div>
            </article>

          </div>
        </section>
      </main>

      <footer className="bg-[var(--color-bg-hard)] border-t border-[var(--color-bg-soft)] py-10">
        <div className="max-w-6xl mx-auto px-4 flex flex-col items-center gap-6">
          <SSULogo className="w-24 h-12 opacity-40 hover:opacity-100 transition-all cursor-help" />
          <div className="text-center space-y-1">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--color-gray)]">
              {t('footer.university')}
            </p>
            <p className="text-xs font-bold text-[var(--color-gray)] uppercase">
              {t('footer.copyright')}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;