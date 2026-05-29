# AI Task Dashboard

Учебный frontend-проект для портфолио. Приложение помогает управлять задачами в dashboard-style интерфейсе: можно добавлять задачи, искать, фильтровать, менять статус, удалять и улучшать описание локальной AI-style функцией.

## Demo

https://ai-task-dashboard-woad.vercel.app/

## Стек

- React
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React

## Возможности

- Добавление задачи с названием, описанием, приоритетом и статусом.
- Карточки задач со статусом, приоритетом и действиями.
- Фильтры: All, Todo, In Progress, Done, High priority.
- Поиск по названию задачи.
- Статистика: всего задач, выполнено, в работе, высокий приоритет.
- Сохранение задач в localStorage.
- Локальная функция `Improve task`, которая улучшает описание по шаблону.
- Адаптивная тёмная тема с grid background, glow и glassmorphism.

## Запуск

```bash
npm install
npm run dev
```

## Сборка

```bash
npm run build
npm run preview
```

## Деплой на Vercel

Стандартные настройки Vite:

- Build command: `npm run build`
- Output directory: `dist`
- Install command: `npm install`

## Что можно улучшить дальше

- Добавить drag-and-drop между статусами.
- Добавить редактирование задачи.
- Добавить сортировку по дате и приоритету.
- Добавить экспорт списка задач.

## Для публикации на GitHub

В репозиторий не должны попадать `node_modules`, `dist`, `.vercel`, `.env` и системные файлы. Это уже настроено в `.gitignore`.
