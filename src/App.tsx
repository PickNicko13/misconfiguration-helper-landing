import { ThemeControls } from './components/ThemeControls';

function App() {
  return (
    <div className="min-h-screen bg-[var(--color-bg-hard)] text-[var(--color-fg-primary)] flex flex-col font-sans transition-colors duration-200">
      <header className="bg-[var(--color-bg-medium)] border-b border-[var(--color-bg-soft)] sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
          <h1 className="text-lg font-bold flex items-center gap-3">
            <img
              src="/SSU.svg"
              alt="MCH Logo"
              className="w-8 h-8 filter grayscale brightness-125"
            />
            <span className="tracking-tight uppercase">Misconfiguration Helper</span>
          </h1>
          <ThemeControls />
        </div>
      </header>

      <main role="main" className="flex-grow">
        <section className="max-w-6xl mx-auto px-4 py-12 md:py-20 flex flex-col md:flex-row items-center gap-10">
          <article className="flex-1 space-y-4">
            <h1 className="text-3xl md:text-5xl font-black tracking-tight text-[var(--color-red)] leading-tight uppercase">
              MCH: Сканер конфігураційних помилок
            </h1>
            <p className="text-lg text-[var(--color-fg-secondary)] leading-snug max-w-xl">
              Інструмент командного рядка для автоматизованої ідентифікації помилок безпеки в мережевих системах.
              Виявляє відкриті порти, Exposed файли та вразливості CORS.
              <span className="block mt-2 font-bold text-[var(--color-aqua)]">Бакалаврська робота.</span>
            </p>
          </article>
          <div className="flex-1 w-full flex justify-center">
            <div className="border-4 border-[var(--color-bg-soft)] p-2 bg-[var(--color-bg-medium)] shadow-[8px_8px_0_0_var(--color-bg-soft)]">
              <img
                src="example.webp"
                alt="Процес сканування"
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
                Ключові слова
              </h2>
              <div className="flex flex-wrap gap-2">
                {["кібербезпека", "Python", "CLI", "misconfiguration", "vulnerability scanning", "CORS", "port scanning", "fuzzing"].map((keyword) => (
                  <span key={keyword} className="px-2 py-1 bg-[var(--color-bg-soft)] text-[var(--color-fg-primary)] border border-[var(--color-gray)] text-xs font-bold uppercase">
                    {keyword}
                  </span>
                ))}
              </div>
            </article>

            <article className="text-[var(--color-fg-secondary)] max-w-none grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-xl font-bold text-[var(--color-yellow)] mb-4 uppercase tracking-widest border-l-4 border-[var(--color-yellow)] pl-3">
                  Актуальність
                </h2>
                <div className="space-y-3 text-sm leading-relaxed">
                  <p>
                    Зростання кількості кібератак через неправильно налаштовані системи стає однією з критичних проблем сучасної IT-інфраструктури.
                    Згідно з звітами OWASP, Security Misconfiguration стабільно входить до топ-10 вразливостей.
                  </p>
                  <p>
                    Існуючі інструменти часто є занадто складними або ресурсномісткими.
                    Розробка модульного інструменту дозволить оперативно виявляти вразливості на ранніх етапах.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[var(--color-blue)] mb-4 uppercase tracking-widest border-l-4 border-[var(--color-blue)] pl-3">
                  Мета дослідження
                </h2>
                <div className="bg-[var(--color-bg-soft)] p-5 border border-[var(--color-bg-hard)]">
                  <p className="text-sm text-[var(--color-fg-primary)] leading-normal italic">
                    Розробити зручний, розширюваний інструмент для автоматизованого виявлення та документування типових помилок конфігурації у веб-серверах та мережевих додатках.
                  </p>
                </div>
              </div>
            </article>

            <article>
              <h2 className="text-xl font-bold text-[var(--color-purple)] mb-6 uppercase tracking-widest border-l-4 border-[var(--color-purple)] pl-3">
                Основні завдання
              </h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-1">
                {[
                  "Аналіз типів помилок OWASP",
                  "Модульний сканер портів",
                  "Механізм Fuzzing файлів",
                  "Перевірка вразливостей CORS",
                  "Інтерфейс командного рядка (CLI)"
                ].map((task, index) => (
                  <div key={index} className="flex items-center gap-3 bg-[var(--color-bg-hard)] p-3 border border-[var(--color-bg-soft)]">
                    <span className="text-[var(--color-purple)] font-black text-lg">0{index + 1}</span>
                    <span className="text-xs font-bold leading-tight">{task}</span>
                  </div>
                ))}
              </div>
            </article>

            <article className="grid md:grid-cols-2 gap-8 pt-8 border-t border-[var(--color-bg-soft)]">
              <div>
                <h2 className="text-xl font-bold text-[var(--color-aqua)] mb-4 uppercase tracking-widest">
                  🛠️ Методологія
                </h2>
                <ul className="space-y-1 font-bold">
                  <li className="flex justify-between border-b border-[var(--color-bg-soft)] pb-1">
                    <span>Mова</span>
                    <span className="text-[var(--color-fg-primary)]">Python 3.10+</span>
                  </li>
                  <li className="flex justify-between border-b border-[var(--color-bg-soft)] pb-1">
                    <span>CLI Framework</span>
                    <span className="text-[var(--color-fg-primary)]">Typer</span>
                  </li>
                  <li className="flex justify-between border-b border-[var(--color-bg-soft)] pb-1">
                    <span>HTTP Clients</span>
                    <span className="text-[var(--color-fg-primary)]">httpx (AsyncIO)</span>
                  </li>
                  <li className="flex justify-between border-b border-[var(--color-bg-soft)] pb-1">
                    <span>Library</span>
                    <span className="text-[var(--color-fg-primary)]">Rich</span>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-xl font-bold text-[var(--color-green)] mb-4 uppercase tracking-widest">
                  📊 Результати
                </h2>
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <span className="text-[var(--color-green)]">■</span>
                    <span>Гнучкий CLI інструмент з модульною структурою</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[var(--color-green)]">■</span>
                    <span>Автоматизований аудит безпеки</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[var(--color-green)]">■</span>
                    <span>Детальна звітність для адміністраторів</span>
                  </li>
                </ul>
              </div>
            </article>

            <article className="pt-12 border-t border-[var(--color-bg-soft)]">
              <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="space-y-4 text-center md:text-left">
                  <h2 className="text-2xl font-black uppercase tracking-tighter">Матеріали</h2>
                  <a
                    href="https://github.com/PickNicko13/misconfiguration-helper"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-fg-primary)] text-[var(--color-bg-hard)] font-black uppercase text-sm hover:invert transition-all active:translate-y-1"
                  >
                    GitHub Репозиторій
                  </a>
                </div>
                <div className="p-6 bg-[var(--color-bg-soft)] border-2 border-[var(--color-fg-secondary)] min-w-[300px]">
                  <span className="block text-[var(--color-gray)] uppercase text-[10px] font-black tracking-widest mb-2">Автор роботи</span>
                  <p className="text-lg font-black uppercase leading-tight">Яременко Микита</p>
                  <p className="text-sm font-bold text-[var(--color-yellow)] uppercase">Група ІН-26-3</p>
                </div>
              </div>
            </article>

          </div>
        </section>
      </main>

      <footer className="bg-[var(--color-bg-hard)] border-t border-[var(--color-bg-soft)] py-10">
        <div className="max-w-6xl mx-auto px-4 flex flex-col items-center gap-6">
          <img
            src="/SSU.svg"
            alt="SumDU Logo"
            className="h-12 grayscale brightness-150 opacity-40 hover:opacity-100 transition-all"
          />
          <div className="text-center space-y-1">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--color-gray)]">
              Сумський Державний Університет
            </p>
            <p className="text-xs font-bold text-[var(--color-gray)] uppercase">
              &copy; 2026 / Бакалаврська робота
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;