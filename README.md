# Лендінг бакалаврської роботи "Misconfiguration Helper"

[![Deploy to GitHub Pages](https://github.com/PickNicko13/misconfiguration-helper-landing/actions/workflows/deploy.yml/badge.svg)](https://github.com/PickNicko13/misconfiguration-helper-landing/actions/workflows/deploy.yml)

Односторінковий вебсайт для представлення бакалаврської роботи "MCH: Сканер конфігураційних помилок".

## 🌐 Live Demo

**[https://picknicko13.github.io/misconfiguration-helper-landing/](https://picknicko13.github.io/misconfiguration-helper-landing/)**

## 📋 Опис

Лендінг створений для візуального представлення бакалаврської роботи з теми "Розробка інструменту для виявлення misconfiguration вразливостей". Сайт підтримує дві мови (Українська/English) та надає детальну інформацію про проєкт, його актуальність, мету, завдання та результати.

## 🛠️ Технології

- **Frontend Framework**: React 19.2.0
- **Build Tool**: Vite 7.2.5 (Rolldown)
- **Styling**: Tailwind CSS v4.1.18
- **Internationalization**: react-i18next 16.5.4
- **Type Checking**: TypeScript 5.9.3
- **Deployment**: GitHub Pages (gh-pages)

## ✨ Основні можливості

### 🌍 Інтернаціоналізація (i18n)
- Повна підтримка української та англійської мов
- Динамічне перемикання мови через UI
- Збереження вибору мови в localStorage
- Автоматичне визначення мови браузера

### 🎨 Система тем Gruvbox
- 6 варіантів тем (Dark/Light × Soft/Medium/Hard)
- Плавне перемикання між темами
- Збереження вибору теми в localStorage

### ♿ Accessibility Features
- **High Contrast Mode**: Підвищений контраст для покращення читабельності
- **Enlarged Text**: Збільшений текст для зручності читання
- **Dyslexia Friendly Font**: Спеціальний шрифт OpenDyslexic для людей з дислексією

### 📱 Адаптивний дизайн
- Desktop-first підхід
- Семантична HTML-розмітка
- SEO-оптимізація (robots.txt, sitemap.xml)
- Sharp corners для чіткого професійного вигляду

## 🚀 Локальна розробка

### Вимоги
- Node.js 18+ 
- npm 9+

### Встановлення залежностей
```bash
npm install
```

### Запуск development сервера
```bash
npm run dev
```

Сайт буде доступний за адресою: `http://localhost:5173`

### Збірка для production
```bash
npm run build
```

Зібрані файли будуть в папці `dist/`.

### Локальний перегляд production збірки
```bash
npm run preview
```

## 📦 Deployment

### Автоматичний deploy через gh-pages
```bash
npm run deploy
```

Ця команда:
1. Виконує production збірку (`npm run build`)
2. Публікує вміст `dist/` в гілку `gh-pages`
3. GitHub Pages автоматично оновлює сайт

### Налаштування GitHub Pages (вручну)
1. Перейдіть до Settings → Pages
2. Source: Deploy from a branch
3. Branch: `gh-pages` → `/ (root)`
4. Save

Сайт буде доступний за адресою: `https://picknicko13.github.io/misconfiguration-helper-landing/`

## 📁 Структура проєкту

```
misconfiguration-helper-landing/
├── public/
│   ├── fonts/              # Локальні шрифти (Inter, OpenDyslexic)
│   ├── example.webp        # Демо-зображення
│   ├── robots.txt          # SEO: інструкції для пошукових роботів
│   ├── sitemap.xml         # SEO: карта сайту
│   └── .nojekyll          # Для GitHub Pages
├── src/
│   ├── components/
│   │   ├── ThemeControls.tsx      # Селектор тем та accessibility
│   │   ├── LanguageSwitcher.tsx   # Перемикач мов UA/EN
│   │   └── SSULogo.tsx            # SVG лого університету
│   ├── locales/
│   │   ├── uk/translation.json    # Українські переклади
│   │   └── en/translation.json    # Англійські переклади
│   ├── App.tsx             # Головний компонент
│   ├── i18n.ts            # Конфігурація i18next
│   ├── main.tsx           # Точка входу React
│   └── index.css          # Глобальні стилі + Tailwind
├── vite.config.ts         # Конфігурація Vite (base path для GH Pages)
├── tsconfig.json          # Конфігурація TypeScript
├── package.json           # Залежності та скрипти
└── README.md             # Цей файл
```

## 🔄 Git Flow

Проєкт використовує **Traditional Git Flow**:

- `main` - Production-ready код
- `develop` - Основна гілка розробки
- `feature/*` - Функціональні гілки для нових можливостей
- `release/*` - Підготовка до релізу

### Основні етапи розробки

1. **Stage 1**: Початкове налаштування проєкту (Vite + React + Tailwind)
2. **Stage 2**: SEO, accessibility, responsive design
3. **Stage 3**: Контент бакалаврської роботи українською
4. **Stage 4**: Styling & UI optimization (Gruvbox themes)
5. **Stage 5**: Internationalization (English version)
6. **Release v1.0.0**: Deployment preparation

## 🔗 Посилання

- **Основний репозиторій проєкту**: [github.com/PickNicko13/misconfiguration-helper](https://github.com/PickNicko13/misconfiguration-helper)
- **Landing Page (Live)**: [picknicko13.github.io/misconfiguration-helper-landing](https://picknicko13.github.io/misconfiguration-helper-landing/)

## 👨‍💻 Автор

**Яременко Микита**  
Група ІН-26-3  
Сумський Державний Університет

## 📄 Ліцензія

Цей проєкт створено для навчальних цілей в рамках бакалаврської роботи.

---

© 2026 / Бакалаврська робота
