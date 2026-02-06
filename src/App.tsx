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
