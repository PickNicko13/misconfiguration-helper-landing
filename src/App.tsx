function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col font-sans">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <h1 className="text-xl font-bold flex items-center gap-2">
            <img
              src="https://via.placeholder.com/40"
              alt="Misconfiguration Helper Logo"
              className="w-10 h-10 rounded-full"
            />
            <span>Misconfiguration Helper</span>
          </h1>
        </div>
      </header>

      <main role="main" className="flex-grow">
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 flex flex-col md:flex-row items-center gap-12">
          <article className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
              MCH: Сканер конфігураційних помилок
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed max-w-2xl">
              Інструмент командного рядка для автоматизованої ідентифікації помилок безпеки в мережевих системах.
              Виявляє відкриті порти, Exposed файли та вразливості CORS.
              Бакалаврська робота.
            </p>
          </article>
          <div className="flex-1 w-full flex justify-center">
            <img
              src="https://via.placeholder.com/800x400?text=Схема+роботи+сканера"
              alt="Ілюстрація роботи інструменту MCH"
              className="rounded-xl shadow-2xl w-full max-w-lg object-cover"
            />
          </div>
        </section>

        <section className="bg-white py-16 md:py-24 border-y border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

            <article>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Ключові слова</h2>
              <div className="flex flex-wrap gap-3">
                {["кібербезпека", "Python", "CLI", "misconfiguration", "vulnerability scanning", "CORS", "port scanning", "fuzzing"].map((keyword) => (
                  <span key={keyword} className="px-4 py-2 bg-blue-50 text-blue-800 rounded-full text-sm font-medium border border-blue-100">
                    {keyword}
                  </span>
                ))}
              </div>
            </article>

            <article className="prose prose-lg text-gray-600 max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 not-prose">Актуальність теми</h2>
              <p>
                Зростання кількості кібератак через неправильно налаштовані системи стає однією з критичних проблем сучасної IT-інфраструктури.
                Згідно з звітами OWASP, Security Misconfiguration стабільно входить до топ-10 вразливостей веб-застосунків.
              </p>
              <p className="mt-4">
                Існуючі інструменти часто є занадто складними для швидкого аудиту або вимагають значних ресурсів.
                Розробка легкого, модульного інструменту для виявлення типових помилок конфігурації дозволить системним адміністраторам
                та DevOps-інженерам оперативно знаходити та усувати вразливості на ранніх етапах.
              </p>
            </article>

            <div className="grid md:grid-cols-2 gap-12">
              <article>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Мета дослідження</h2>
                <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 h-full">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Розробити зручний, розширюваний інструмент для автоматизованого виявлення та документування типових помилок конфігурації (Security Misconfiguration) у веб-серверах та мережевих додатках.
                  </p>
                </div>
              </article>

              <article>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Основні завдання</h2>
                <ul className="space-y-4">
                  {[
                    "Проаналізувати найпоширеніші типи помилок конфігурації (згідно OWASP).",
                    "Реалізувати модульний сканер портів та сервісів.",
                    "Розробити механізм виявлення Exposed файлів та директорій (Fuzzing).",
                    "Імплементувати перевірку вразливостей CORS (ACAO headers).",
                    "Створити зручний інтерфейс командного рядка (CLI) та систему звітності."
                  ].map((task, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold text-sm">
                        {index + 1}
                      </div>
                      <span className="text-gray-700 pt-1">{task}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </div>

            <article>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Методологія та результат</h2>
              <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                      🛠️ Інструментарій
                    </h3>
                    <ul className="text-gray-600 space-y-2">
                      <li>• Мова програмування: <strong>Python 3.10+</strong></li>
                      <li>• CLI фреймворк: <strong>Typer</strong></li>
                      <li>• HTTP запити: <strong>httpx</strong> (AsyncIO)</li>
                      <li>• Форматування: <strong>Rich</strong></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                      📊 Очікувані результати
                    </h3>
                    <ul className="text-gray-600 space-y-2">
                      <li>• Гнучкий CLI інструмент</li>
                      <li>• Можливість розширення плагінами</li>
                      <li>• Зменшення часу аудиту безпеки</li>
                      <li>• Детальна звітність для адміністраторів</li>
                    </ul>
                  </div>
                </div>
              </div>
            </article>

            <article className="text-center pt-8 border-t border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Контакти та матеріали</h2>
              <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                <a
                  href="https://github.com/PickNicko13/misconfiguration-helper"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-xl font-medium hover:bg-gray-800 transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  GitHub Репозиторій
                </a>
                <div className="text-gray-600">
                  <span className="block font-medium text-gray-900">Студент:</span>
                  Яременко Микита ІН-26-3
                </div>
              </div>
            </article>

          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm">
          <p>&copy; 2026 Misconfiguration Helper. Бакалаврська робота.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
