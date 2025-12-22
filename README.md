# Travel Test

Веб-приложение для выбора и бронирования туристических услуг с функциональностью корзины покупок.

## Описание

Приложение позволяет пользователям просматривать доступные туристические услуги, добавлять их в корзину и управлять выбранными услугами. Интерфейс адаптирован для работы на десктопе и мобильных устройствах.

## Приложение доступно по адресу [https://travel-test-ivory.vercel.app/](https://travel-test-ivory.vercel.app/)

## Технологический стек

- **Next.js 16.1.0** - React фреймворк с App Router
- **React 19.2.3** - библиотека для создания пользовательских интерфейсов
- **TypeScript** - типизированный JavaScript
- **SCSS** - препроцессор CSS для стилизации
- **Zustand** - легковесная библиотека для управления состоянием
- **TanStack Query (React Query)** - библиотека для работы с серверным состоянием и кэшированием
- **ESLint** - линтер для проверки качества кода
- **Prettier** - форматировщик кода

## Архитектура проекта

Проект организован по методологии **Feature-Sliced Design (FSD)**:

```
src/
├── app/              # Next.js App Router конфигурация
├── _pages/           # Страницы приложения
├── widgets/          # Композитные UI-блоки
├── features/         # Функциональные возможности
├── entities/         # Бизнес-сущности (сервисы, корзина)
├── shared/           # Переиспользуемые компоненты и утилиты
```

## Функциональность

- Просмотр списка доступных туристических услуг
- Добавление услуг в корзину
- Управление количеством услуг в корзине
- Удаление услуг из корзины
- Подсчет общей стоимости выбранных услуг
- Адаптивный дизайн для мобильных устройств
- Мобильная корзина с выдвижной панелью (drawer)

## Установка и запуск

### Требования

- Node.js 18+
- npm, yarn, pnpm или bun

### Установка зависимостей

```bash
npm install
```

### Запуск в режиме разработки

```bash
npm run dev
```

### Сборка для production

```bash
npm run build
```

### Запуск production сборки

```bash
npm start
```

## Доступные скрипты

- `npm run dev` - запуск dev-сервера
- `npm run build` - сборка production версии
- `npm start` - запуск production версии
- `npm run lint` - проверка кода линтером
- `npm run lint:fix` - автоматическое исправление ошибок линтера
- `npm run format` - форматирование кода с помощью Prettier
- `npm run format:check` - проверка форматирования кода

## Особенности реализации

- Использование React Query для управления состоянием загрузки данных
- Zustand store для управления состоянием корзины
- Модульные SCSS стили для каждого компонента
- Адаптивный дизайн с поддержкой мобильных устройств
- Блокировка прокрутки body при открытой мобильной корзине
- TypeScript для типобезопасности

## Разработка

Проект следует принципам:

- **SOLID** - принципы объектно-ориентированного программирования
- **KISS** - простота и понятность кода
- **Feature-Sliced Design** - архитектура

## Лицензия

Проект создан в образовательных целях.

---

# Travel Test

Web application for selecting and booking travel services with shopping cart functionality.

## Description

The application allows users to browse available travel services, add them to the cart, and manage selected services. The interface is adapted for desktop and mobile devices.

## Application is available at [https://travel-test-ivory.vercel.app/](https://travel-test-ivory.vercel.app/)

## Tech Stack

- **Next.js 16.1.0** - React framework with App Router
- **React 19.2.3** - library for building user interfaces
- **TypeScript** - typed JavaScript
- **SCSS** - CSS preprocessor for styling
- **Zustand** - lightweight state management library
- **TanStack Query (React Query)** - library for server state management and caching
- **ESLint** - linter for code quality checks
- **Prettier** - code formatter

## Project Architecture

The project is organized using **Feature-Sliced Design (FSD)** methodology:

```
src/
├── app/              # Next.js App Router configuration
├── _pages/           # Application pages
├── widgets/          # Composite UI blocks
├── features/         # Functional features
├── entities/         # Business entities (services, cart)
├── shared/           # Reusable components and utilities
```

## Features

- Browse available travel services
- Add services to cart
- Manage service quantities in cart
- Remove services from cart
- Calculate total cost of selected services
- Responsive design for mobile devices
- Mobile cart with drawer panel

## Installation and Running

### Requirements

- Node.js 18+
- npm, yarn, pnpm or bun

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Run Production Build

```bash
npm start
```

## Available Scripts

- `npm run dev` - start dev server
- `npm run build` - build production version
- `npm start` - run production version
- `npm run lint` - check code with linter
- `npm run lint:fix` - automatically fix linter errors
- `npm run format` - format code with Prettier
- `npm run format:check` - check code formatting

## Implementation Details

- React Query for managing data loading state
- Zustand store for cart state management
- Modular SCSS styles for each component
- Responsive design with mobile device support
- Body scroll lock when mobile cart is open
- TypeScript for type safety

## Development

The project follows these principles:

- **SOLID** - object-oriented programming principles
- **KISS** - code simplicity and clarity
- **Feature-Sliced Design** - architecture

## License

This project is created for educational purposes.
