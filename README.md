# Техническое задание на разработку веб-сайта кулинарных рецептов «Оцень вкусно»

## 1. Общая информация
Цель проекта:
Разработка веб-приложения для публикации, поиска и хранения кулинарных рецептов, с возможностью взаимодействия пользователей и администрации через встроенный чат.

### Основные задачи:

Обеспечить пользователям удобный интерфейс для поиска и добавления рецептов.
Внедрить функционал сортировки и фильтрации рецептов.
Обеспечить возможность регистрации и авторизации пользователей, включая авторизацию через социальные сети.
Реализовать чат с администрацией для поддержки пользователей.
Целевая аудитория:
Пользователи, интересующиеся кулинарией, от новичков до профессионалов.

## 2. Функциональные требования
### 2.1. Авторизация и регистрация
Описание:
Реализовать систему регистрации и авторизации пользователей с поддержкой OAuth (Google, Facebook). Включить возможность восстановления пароля через email.

#### Функционал:

Регистрация с подтверждением через email.
Авторизация через email и пароль.
Восстановление пароля.
Авторизация через социальные сети (Google, Facebook).
Личный кабинет с возможностью редактирования профиля и управления избранными рецептами.

#### Технологии:

Next.js для рендеринга страниц.
TypeScript для типизации кода.
API для взаимодействия с сервером.
Ant Design для интерфейсов.
### 2.2. Лента рецептов с пагинацией
Описание:
Отображение списка рецептов на главной странице с возможностью пагинации.

#### Функционал:

Показ рецептов с изображением, названием, кратким описанием и рейтингом.
Пагинация для удобного просмотра большого количества рецептов.

####  Технологии:

Next.js для серверного рендеринга.
API для получения списка рецептов.
Ant Design для UI-компонентов.
### 2.3. Страница рецепта
Описание:
Предоставление детальной информации о рецепте на отдельной странице.

####  Функционал:

Отображение названия, изображения, времени приготовления, количества порций и сложности.
Показ истории рецепта.
Список ингредиентов и пошаговая инструкция приготовления с возможностью добавления изображений и видео.
Кнопка «Добавить в избранное».
Технологии:

Next.js для рендеринга страницы.
API для получения данных о рецепте.
Ant Design для структурирования информации.
### 2.4. Фильтрация и сортировка рецептов
Описание:
Возможность фильтрации рецептов по различным параметрам и сортировка их по популярности, рейтингу и другим критериям.

#### Функционал:

Фильтрация по типу кухни, времени приготовления, сложности и рейтингу.
Сортировка по дате добавления, популярности и времени приготовления.

#### Технологии:

Next.js для обработки запросов с фильтрацией.
Ant Design для интерфейсов фильтров и сортировки.
### 2.5. Поиск рецептов по ингредиентам
Описание:
Пользователь вводит список ингредиентов, и система предлагает рецепты, содержащие эти ингредиенты.

#### Функционал:

Ввод ингредиентов и поиск подходящих рецептов.
Возможность сохранения часто используемых ингредиентов.

#### Технологии:

Next.js для обработки запросов.
API для получения данных рецептов.
Ant Design для форм поиска.
### 2.6. Добавление собственного рецепта
Описание:
Пользователь может добавлять и редактировать свои рецепты через личный кабинет.

#### Функционал:

Форма добавления рецепта с полями для названия, описания, истории, ингредиентов и процесса приготовления.
Возможность добавления изображений и видео.
Редактирование и удаление своих рецептов.

#### Технологии:

Next.js API Routes для обработки запросов.
Ant Design для создания интерфейса.
### 2.7. Избранные рецепты
Описание:
Возможность добавлять рецепты в избранное и просматривать их в личном кабинете.

#### Функционал:

Добавление рецепта в избранное.
Просмотр и управление избранными рецептами.

#### Технологии:

Next.js для управления состоянием.
API для работы с избранным.
Ant Design для интерфейса управления избранным.
### 2.8. Чат с администрацией
Описание:
Встроенный чат для связи с администрацией сайта.

#### Функционал:

Отправка текстовых сообщений и изображений.
История переписки доступна в личном кабинете.

#### Технологии:

Next.js для создания API для чата.
WebSockets для реального времени.
Ant Design для интерфейса чата.
### 2.9. Мобильная адаптация
Описание:
Сайт должен быть полностью адаптирован для мобильных устройств.

#### Функционал:

Адаптивный дизайн.
Бургер-меню для мобильной навигации.

#### Технологии:

CSS-модули или styled-components для стилизации.
Ant Design для адаптивных элементов интерфейса.

### 2.91 Система рекомендаций:

Добавить систему рекомендаций рецептов. Это может быть основано на предпочтениях пользователя (например, предыдущие поисковые запросы или избранные рецепты). Это повысит вовлеченность пользователей, предлагая им новые и интересные рецепты.
Интерактивные функции:

Возможность создавать персонализированные планировщики питания. Пользователи могут выбрать рецепты на неделю и автоматически создавать список покупок.
Рейтинг пользователей и комментарии: Добавить возможность оставлять отзывы и рейтинговать рецепты. Это не только создаст больше взаимодействия среди пользователей, но и позволит более точно оценить популярность и качество рецептов.

### 2.92 Социальные взаимодействия:

Добавить возможность подписки на других пользователей. Это позволит пользователям следить за обновлениями рецептов других участников и поддерживать социальное взаимодействие.
Интеграция с социальными сетями: Не только авторизация, но и возможность делиться рецептами прямо в социальных сетях (Facebook, Instagram и др.).

### 2.93 Интеграция с API:

Интеграция с внешними API для поиска ингредиентов и рецептов. Например, API от продуктовых магазинов для создания списка покупок, который можно сразу заказать онлайн.

### 2.94 Расширенная фильтрация:

Более гибкая система фильтрации. Например, возможность исключать определенные ингредиенты (веганские, безглютеновые рецепты и т.д.). Это может быть полезно для пользователей с особыми диетическими предпочтениями.

### 2.95 Адаптация под разные языки:

Мультиязычная поддержка. Реализация функционала, позволяющего пользователям выбирать язык интерфейса. Это может привлечь международную аудиторию.

### 2.96 Дизайн и интерфейс:

Улучшение доступности (Accessibility): Убедиться, что сайт соответствует стандартам доступности (например, WCAG 2.1). Это включает использование корректных цветовых контрастов, альт-текста для изображений, и других аспектов, чтобы сайт был доступен для всех пользователей, включая людей с ограниченными возможностями.

## 3. Нефункциональные требования
### 3.1. Производительность
Быстрая загрузка страниц, даже при большом количестве изображений.
Оптимизация изображений и использование кеширования.
### 3.2. Безопасность
Шифрование паролей и защита пользовательских данных.
Защита от XSS и CSRF атак.
### 3.3. Масштабируемость
Возможность легкого добавления новых модулей и функционала в будущем.
## 4. Технологии
### 4.1. Next.js
Основной фреймворк для разработки фронтенда с использованием SSR и SSG.
### 4.2. TypeScript
Типизация для повышения надежности кода.
### 4.3. HTML и CSS
Верстка страниц с использованием современных стандартов HTML5 и CSS3.
### 4.4. NPM
Управление зависимостями проекта и сборка.
### 4.5. API
Взаимодействие с backend через REST API или GraphQL.
### 4.6. Ant Design (Antd)
Библиотека компонентов для создания пользовательского интерфейса.

## 5. Развертывание проекта

Конечно же сначала нам нужно установить все зависимости npm i в помощь.

Ну и все, что нам остается это просто запустить проект npm run dev

## 6. Файловая структура проекта

Проект на основе Next.js с использованием TypeScript и Ant Design будет иметь следующую файловую структуру:

      /root
      │
      ├── /public
      │   ├── /images               # Каталог для хранения статичных изображений
      │   │   └── /recipes          # Изображения рецептов
      │   └── /favicon.ico          # Фавикон сайта
      │
      ├── /src
      │   ├── /components           # Переиспользуемые React-компоненты
      │   │   ├── /common           # Общие компоненты (кнопки, формы и т.д.)
      │   │   ├── /layout           # Компоненты для построения макета (header, footer, sidebar)
      │   │   ├── /recipe           # Компоненты для рецептов (карточка рецепта, список рецептов)
      │   │   └── /chat             # Компоненты для чата с администрацией
      │   │
      │   ├── /pages                # Next.js страницы
      │   │   ├── /api              # API маршруты для обработки запросов
      │   │   │   ├── /auth         # API для авторизации и регистрации пользователей
      │   │   │   ├── /recipes      # API для работы с рецептами
      │   │   │   └── /chat         # API для работы с чатом
      │   │   ├── /auth             # Страницы для авторизации и регистрации
      │   │   │   ├── /login.tsx    # Страница авторизации
      │   │   │   ├── /register.tsx # Страница регистрации
      │   │   │   └── /reset.tsx    # Страница восстановления пароля
      │   │   ├── /recipes          # Страницы рецептов
      │   │   │   ├── /[id].tsx     # Динамическая страница отдельного рецепта
      │   │   │   ├── /index.tsx    # Главная страница с лентой рецептов
      │   │   │   └── /add.tsx      # Страница добавления нового рецепта
      │   │   ├── /favorites.tsx    # Страница избранных рецептов
      │   │   ├── /profile.tsx      # Личный кабинет пользователя
      │   │   └── /chat.tsx         # Страница чата с администрацией
      │   │
      │   ├── /styles               # Стили проекта
      │   │   ├── /globals.css      # Глобальные стили
      │   │   ├── /theme.less       # Настройки темы для Ant Design
      │   │   └── /components       # Стили для компонентов
      │   │
      │   ├── /hooks                # Кастомные хуки для React
      │   │   └── /useAuth.ts       # Хук для работы с авторизацией
      │   │
      │   ├── /context              # Контекст API для глобального состояния
      │   │   └── /AuthContext.tsx  # Контекст для авторизации
      │   │
      │   ├── /utils                # Утилитарные функции и вспомогательные модули
      │   │   ├── /api.ts           # Взаимодействие с API
      │   │   ├── /validators.ts    # Валидация форм и данных
      │   │   └── /helpers.ts       # Различные вспомогательные функции
      │   │
      │   ├── /config               # Конфигурационные файлы
      │   │   ├── /env.ts           # Конфигурация окружения
      │   │   └── /api-config.ts    # Конфигурация API (базовый URL, ключи и т.д.)
      │   │
      │   └── /services             # Сервисы для взаимодействия с API
      │       ├── /authService.ts   # Сервис для работы с авторизацией
      │       ├── /recipeService.ts # Сервис для работы с рецептами
      │       └── /chatService.ts   # Сервис для работы с чатом
      │
      ├── .env                      # Файл для переменных окружения
      ├── .gitignore                # Файл для исключений из контроля версий Git
      ├── tsconfig.json             # Конфигурация TypeScript
      ├── next.config.js            # Конфигурация Next.js
      ├── package.json              # Основной файл конфигурации проекта и зависимостей
      └── README.md                 # Документация проекта

#### Описание структуры:

    /public: Содержит статические файлы, которые будут доступны по прямым URL (например, изображения и favicon).
    
    /src: Основная папка с исходным кодом проекта.
    
    /components: Каталог для всех переиспользуемых компонентов, сгруппированных по категориям.
    
    /pages: Страницы проекта, автоматически обрабатываемые Next.js. Здесь также находятся API маршруты для обработки запросов.
    
    /styles: Файлы стилей, включая глобальные стили и тему Ant Design.
    
    /hooks: Кастомные хуки для облегчения работы с логикой в компонентах.
    
    /context: Контекст для глобального состояния приложения (например, для управления авторизацией).
    
    /utils: Утилитарные функции и модули.
    
    /config: Конфигурационные файлы для различных аспектов проекта.
    
    /services: Сервисы для взаимодействия с API (например, для управления пользователями, рецептами и чатом).
    
    .env: Файл для хранения конфиденциальных переменных окружения.
    
    .gitignore: Файл, указывающий Git, какие файлы и папки не следует добавлять в репозиторий.
    
    tsconfig.json: Конфигурационный файл TypeScript.
    
    next.config.js: Конфигурационный файл Next.js.
    
    package.json: Основной файл конфигурации проекта, содержащий зависимости и скрипты для сборки и запуска.
    
    README.md: Документация проекта, включающая инструкции по установке и запуску.

Эта структура обеспечивает логическую организацию кода, облегчая разработку, поддержку и масштабирование проекта.

## 7. Заключение
Проект «Вкусно поесть» нацелен на создание современного, удобного и функционального веб-приложения для любителей кулинарии. Разработка будет выполнена с использованием современных технологий, что обеспечит высокую производительность, безопасность и возможность дальнейшего расширения функционала.
