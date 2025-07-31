#!/bin/bash

# Убедись, что ты в корне репозитория
if [ ! -d .git ]; then
  echo "Ошибка: этот каталог не является Git-репозиторием."
  exit 1
fi

# Название новой ветки (можно изменить при желании)
NEW_BRANCH="main"

echo "Создаю новую ветку без истории..."
git checkout --orphan "$NEW_BRANCH"

echo "Добавляю все файлы в индекс..."
git add -A

echo "Создаю коммит..."
git commit -m "🔄 Новый старт: очищена история проекта"

echo "Удаляю старую ветку..."
git branch | grep -v "$NEW_BRANCH" | xargs git branch -D

echo "Переименовываю ветку (если нужно)..."
git branch -m "$NEW_BRANCH"

echo "Принудительно пушу на GitHub..."
git push -f origin "$NEW_BRANCH"

echo "✅ Готово: история репозитория перезаписана!"
