import { security, packages, actions, codeSpace, copilot, codeReview, discussion, issues, share, twitter, facebook, linkedin, youtube, twitch, tiktok, kpmg, sap, telsus, png, marcedeeze, homeBrew, directus, dayhesoe, imolorhe, commandPost, kazupon, sindresorhus, eslint, threeM } from "@public";

// Навигация по продукту
export const productNavItem = [
    {
        id: 1,
        title: "Автоматизация",
        subTitle: "Ускорьте ваши рабочие процессы",
        icon: actions
    },
    {
        id: 2,
        title: "Пакеты",
        subTitle: "Управляйте и храните звуковые библиотеки",
        icon: packages
    },
    {
        id: 3,
        title: "Безопасность",
        subTitle: "Защита ваших аудиопроектов",
        icon: security,
    },
    {
        id: 4,
        title: "Рабочее пространство",
        subTitle: "Мгновенное создание сессий редактирования",
        icon: codeSpace
    },
    {
        id: 5,
        title: "Помощник",
        subTitle: "Улучшите звук с помощью ИИ",
        icon: copilot,
    },
    {
        id: 6,
        title: "Обзор треков",
        subTitle: "Контроль изменений в миксе",
        icon: codeReview,
    },
    {
        id: 7,
        title: "Задачи",
        subTitle: "Планирование и отслеживание правок",
        icon: issues,
    },
    {
        id: 8,
        title: "Обсуждения",
        subTitle: "Совместная работа над проектами",
        icon: discussion,
    },
];

// Навигация (дополнительная)
export const productNavItem2 = [
    {
        id: 1,
        title: "Документация",
        icon: share
    },
    {
        id: 2,
        title: "Навыки аудио",
        icon: share,
    },
    {
        id: 3,
        title: "Блог",
        icon: share
    },
];

// Навигация по решениям
export const solutionNavItem = [
    {
        id: 1,
        title: "Для",
        links: [
            {
                id: 1,
                title: "Профессионалов звукозаписи",
            },
            {
                id: 2,
                title: "Музыкальных студий",
            },
            {
                id: 3,
                title: "Инди-музыкантов",
            },
        ],
    },
];

export const solutionNavItem1 = [
    {
        id: 1,
        title: "По решениям",
        links: [
            {
                id: 1,
                title: "Микширование и мастеринг",
                icon: share
            },
            {
                id: 2,
                title: "Обработка аудио с ИИ",
                icon: share
            },
        ],
    },
];

export const solutionNavItem2 = [
    {
        id: 1,
        title: "Кейсы",
        links: [
            {
                id: 1,
                title: "Ресурсы",
                icon: share
            },
        ],
    },
];

// Навигация по опенсорсу
export const openSourceNavItem = [
    {
        id: 1,
        title: "Поддержка сообщества",
        subTitle: "Помогайте развитию аудио проектов",
    },
    {
        id: 2,
        title: "Проекты NoirSound",
        subTitle: "Вклад в развитие редактора",
    },
];

export const openSourceNavItem1 = [
    {
        id: 1,
        title: "Репозитории",
        links: [
            {
                id: 1,
                title: "Темы",
            },
            {
                id: 2,
                title: "Тренды",
            },
            {
                id: 3,
                title: "Коллекции",
            },
        ]
    }
];

// Бренды (Hero)
export const heroBrandsItem = [
    { id: 1, src: kpmg },
    { id: 2, src: sap },
    { id: 3, src: telsus },
    { id: 4, src: png },
    { id: 5, src: marcedeeze },
    { id: 6, src: threeM },
];

// Партнёры и сотрудничество
export const colabItems = [
    {
        id: 1,
        title: "Homebrew",
        subTitle: "Партнёр",
        src: homeBrew
    },
    {
        id: 2,
        title: "Directus",
        subTitle: "Партнёр",
        src: directus
    },
    {
        id: 3,
        title: "Nick DeJesus",
        subTitle: "Партнёр",
        src: dayhesoe
    },
    {
        id: 4,
        title: "Samuel",
        subTitle: "Партнёр",
        src: imolorhe
    },
    {
        id: 5,
        title: "CommandPost",
        subTitle: "Партнёр",
        src: commandPost
    },
    {
        id: 6,
        title: "kazuya",
        subTitle: "Партнёр",
        src: kazupon
    },
    {
        id: 7,
        title: "Nikema",
        subTitle: "Партнёр",
        src: sindresorhus
    },
    {
        id: 8,
        title: "Sindresorhus",
        subTitle: "Партнёр",
        src: homeBrew
    },
    {
        id: 9,
        title: "ESLint",
        subTitle: "Партнёр",
        src: eslint
    },
];

// Ссылки в футере
export const footerLinksItem = [
    {
        id: 1,
        title: "Продукт",
        links: [
            {
                id: 1,
                title: "Возможности",
                href: "features",
            },
            {
                id: 2,
                title: "Безопасность",
                href: "security",
            },
            {
                id: 3,
                title: "Команда",
                href: "team",
            },
            {
                id: 4,
                title: "Корпоративным клиентам",
                href: "enterprise",
            },
            {
                id: 5,
                title: "Кейсы",
                href: "custom-stories",
            },
            {
                id: 6,
                title: "Проекты сообщества",
                href: "readme-project",
            },
            {
                id: 7,
                title: "Цены",
                href: "pricing",
            },
            {
                id: 8,
                title: "Ресурсы",
                href: "resources",
            },
            {
                id: 9,
                title: "Дорожная карта",
                href: "roadmap",
            },
            {
                id: 10,
                title: "Сравнение редакторов",
                href: "compare",
            },
        ]
    },
    {
        id: 2,
        title: "Платформа",
        links: [
            {
                id: 1,
                title: "API для разработчиков",
                href: "developer-api",
            },
            {
                id: 2,
                title: "Партнёры",
                href: "partners",
            },
            {
                id: 3,
                title: "Приложения",
                href: "electron",
            },
            {
                id: 4,
                title: "Десктоп версия",
                href: "desktop",
            },
        ]
    },
    {
        id: 3,
        title: "Поддержка",
        links: [
            {
                id: 1,
                title: "Документация",
                href: "docs",
            },
            {
                id: 2,
                title: "Форум сообщества",
                href: "community-forum",
            },
            {
                id: 3,
                title: "Профессиональные услуги",
                href: "professional-services",
            },
            {
                id: 4,
                title: "Премиум поддержка",
                href: "premium-support",
            },
            {
                id: 5,
                title: "Навыки",
                href: "skills",
            },
            {
                id: 6,
                title: "Статус сервиса",
                href: "status",
            },
            {
                id: 7,
                title: "Контакты",
                href: "contact",
            },
        ]
    },
    {
        id: 4,
        title: "Компания",
        links: [
            {
                id: 1,
                title: "О нас",
                href: "about",
            },
            {
                id: 2,
                title: "Блог",
                href: "blog",
            },
            {
                id: 3,
                title: "Карьера",
                href: "careers",
            },
            {
                id: 4,
                title: "Пресса",
                href: "press",
            },
            {
                id: 5,
                title: "Инклюзивность",
                href: "inclusion",
            },
            {
                id: 6,
                title: "Социальное влияние",
                href: "social-impact",
            },
            {
                id: 7,
                title: "Магазин",
                href: "shop",
            },
            {
                id: 8,
                title: "Истории клиентов",
                href: "customer-stories",
            },
            {
                id: 9,
                title: "Проекты сообщества",
                href: "readme-project",
            },
        ]
    }
];

// Соцсети в футере
export const footerSocialItems = [
    {
        id: 1,
        href: "https://web.telegram.org",
        src: twitter
    },
    {
        id: 2,
        href: "https://www.whatsapp.com",
        src: facebook
    },
    {
        id: 3,
        href: "https://vk.com",
        src: linkedin
    },
    {
        id: 4,
        href: "https://www.youtube.com",
        src: youtube
    },
    {
        id: 5,
        href: "https://www.twitch.com",
        src: twitch
    },
    {
        id: 6,
        href: "https://www.tiktok.com",
        src: tiktok
    },
];

// Юридическая информация в футере
export const footerTermsItem = [
    {
        id: 1,
        title: "© 2025 NoirSound, Inc.",
        links: [
            {
                id: 1,
                title: "Условия использования",
                href: "/"
            },
            {
                id: 2,
                title: "Политика конфиденциальности",
                href: "/"
            },
            {
                id: 3,
                title: "Карта сайта",
                href: "/"
            },
            {
                id: 4,
                title: "Что такое аудиоредактор?",
                href: "/"
            },
            {
                id: 5,
                title: "|",
                href: "/"
            },
            {
                id: 6,
                title: "Вадим Айрапетов",
                href: "/"
            },
            {
                id: 7,
                title: "|",
                href: "/"
            },
            {
                id: 8,
                title: "Скриншоты были взяты с реальной программы FL Studio",
                href: "/"
            },
        ]
    }
];
