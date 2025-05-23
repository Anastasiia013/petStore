Интернет-магазин товаров для животных Pet Store

-- Описание проекта

Это интернет-магазин товаров для домашних животных, сделанный на React, с использованием Redux Toolkit, Axios и React-Router-Dom. Релизованы заказ через форму, корзина, фильтрация, API.

-- Цель

Собрать полноценное приложение с реальным функционалом: маршруты, формы, интерактив, корзина, анимации, адаптив.

-- Процесс

1. Макет из Figma

Разметка и логика взяты строго из макета. Реализованы все ключевые страницы:

    Главная
    Категории
    Продукты категории
    Все товары
    Товары со скидкой
    Карточка товара
    Корзина (пустая / с товарами / успешный заказ)
    404

2. Backend

Сервер на Node.js с SQLite. Данные по категориям, товарам, заказам.

    /modules: схемы товаров и категорий
    /routes: API для продуктов, заказов, категорий
    Подключение через Axios

Репозиторий backend: https://github.com/strexzy/Pet-Shop-Backend

-- Структура проекта

    /components: переиспользуемые штуки (карточки, кнопки)
    /pages: главная, категории и т.д.
    /layouts: шапка и подвал
    /ui: базовые элементы интерфейса
    Redux store
    Axios
    Роутинг через react-router-dom

-- Header и Footer

Header — логотип, навигация, иконка корзины с числом товаров.
Footer — соцсети, контакты и карта.

-- Стандарты

    Консоль без ошибок и console.log
    Переиспользуемые компоненты
    Адаптив и модульные стили
    Анимации и SVG

**Anastasiia Posokhova**
[GitHub](https://github.com/Anastasiia013)
