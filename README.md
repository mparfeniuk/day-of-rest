# Day of Rest — One-page Fullscreen Blocks

Односторінковий веб-застосунок з fullscreen блоками, присвячений дню спочинку (Буття 2:2-3).

A one-page web application with fullscreen blocks, dedicated to the day of rest (Genesis 2:2-3).

## 🛠 Технології / Stack

- **Vite** — швидка збірка
- **React 18** + **TypeScript**
- **TailwindCSS** — утилітарні стилі
- **PT Serif** — шрифт (Google Fonts)

## 🚀 Запуск / Getting Started

```bash
# Встановити залежності / Install dependencies
npm install

# Запустити dev-сервер / Start dev server
npm run dev

# Збірка для продакшену / Build for production
npm run build

# Попередній перегляд збірки / Preview build
npm run preview
```

Після `npm run dev` відкрийте http://localhost:5173

## 📁 Структура файлів / File Structure

```
src/
├── main.tsx              # Entry point
├── App.tsx               # Main component with blocks
├── index.css             # Tailwind + custom styles
├── components/
│   ├── Block.tsx         # Fullscreen block component
│   ├── LangSwitcher.tsx  # Language switcher (UA/EN/LA)
│   ├── Navigation.tsx    # Vertical dots navigation
│   └── ScrollArrow.tsx   # Scroll down arrow button
├── context/
│   └── LanguageContext.tsx  # i18n context provider
├── data/
│   └── translations.ts   # ⭐ All text content (edit here!)
└── utils/
    └── scroll.ts         # Keyboard navigation handlers
```

## ✏️ Редагування контенту / Editing Content

### Зміна текстів / Changing Text

Усі тексти знаходяться у файлі `src/data/translations.ts`:

```typescript
// Приклад додавання нового контенту для блоку "reflection"
blocks: [
  // ...
  {
    id: "reflection",
    title: "Ваш заголовок",
    content: "Ваш контент для роздумів...",
  },
  // ...
];
```

### Додавання нових блоків / Adding New Blocks

1. Додайте новий блок у масив `blocks` для кожної мови в `translations.ts`
2. Додайте ID блоку в масив `BLOCK_IDS` у `src/App.tsx`

### Зміна палітри кольорів / Changing Color Palette

Відредагуйте масив `BLOCK_COLORS` у `src/data/translations.ts`:

```typescript
export const BLOCK_COLORS = [
  { bg: "#F9E4D4", text: "#470D21", name: "cream" }, // Блок 1
  { bg: "#D67D3E", text: "#470D21", name: "orange" }, // Блок 2
  { bg: "#9C0F48", text: "#F9E4D4", name: "crimson" }, // Блок 3
  { bg: "#470D21", text: "#F9E4D4", name: "dark" }, // Блок 4
] as const;
```

Кольори циклічно повторюються для блоків > 4.

## ⌨️ Клавіатурна навігація / Keyboard Navigation

| Клавіша          | Дія             |
| ---------------- | --------------- |
| `↓` / `PageDown` | Наступний блок  |
| `↑` / `PageUp`   | Попередній блок |
| `Home`           | Перший блок     |
| `End`            | Останній блок   |

## 🌐 Мови / Languages

Підтримуються три мови:

- 🇺🇦 Українська (UA) — за замовчуванням
- 🇬🇧 English (EN)
- 🏛️ Latina (LA)

Перемикач мов знаходиться у верхньому лівому куті. Вибір зберігається в localStorage.

## ♿ Доступність / Accessibility

- Семантична HTML структура (`<main>`, `<section>`, `<article>`)
- WCAG AA контраст для всіх комбінацій кольорів
- `aria-current` для індикатора навігації
- `aria-label` для інтерактивних елементів
- Повна клавіатурна навігація
- Підтримка screen readers

## 📜 Ліцензія / License

MIT
