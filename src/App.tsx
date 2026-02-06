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

        <section className="bg-white py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Основні можливості</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <div key={item} className="p-6 border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg mb-4 flex items-center justify-center text-blue-600 font-bold">
                    {item}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Фіча #{item}</h3>
                  <p className="text-gray-600">Опис функціоналу placeholder text. Lorem ipsum dolor sit amet.</p>
                </div>
              ))}
            </div>
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
