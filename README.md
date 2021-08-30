# Демо
https://true-conf-amitowez.vercel.app/#/

# Тестовое задание от TrueConf
## Фичи
- Полностью исправный светофор 
- Отличный дизайн(детская картонная поделка)
#### `npm i `
#### `npm start`
http://localhost:8080/

#####Test task
Требуется разработать одностраничное приложение (SPA) - эмулятор
светофора.
Приложение должно представлять из себя модель светофора и иметь 3 экрана:
Экран 1: горит красный (зеленый и желтый тусклые/полупрозрачные)
Экран 2: горит желтый (зеленый и красный тусклые/полупрозрачные)
Экран 3: горит зеленый (красный и желтый тусклые/полупрозрачные)
Роутинг приложения должен быть настроен таким образом, чтобы при вводе
адреса в адресной строке можно было открыть любой из экранов
(например,
‘/red’ - экран 1,
‘/yellow’ - экран 2,
‘/green’ - экран 3)
Запуск работы светофора должен происходить сразу после открытия
приложения.
Светофор может начинать свою работу с любого сигнала, в зависимости от
открытого экрана, и должен работать циклически: красный('/red') ->
желтый('/yellow') -> зеленый('/green') -> желтый('/yellow') -> красный('/red') ->
желтый('/yellow') -> ...
При смене сигнала должен также меняться роут (адрес в адресной строке).
Красный горит 10 секунд.
Желтый горит 3 секунды.
Зеленый горит 15 секунд.
Дополнительные задания:
• Реализовать таймер, показывающий сколько секунд осталось до смены
сигнала светофора.
• Реализовать мигание сигнала светофора, если до его смены осталось
меньше 3 секунд.
• Реализовать механизм, позволяющий сохранять состояние светофора и
запускать его работу с того же момента при перезагрузке страницы.
Приложение должно быть написано с использованием фреймворка VueJS и
собираться с помощью Webpack.
Приложение не должно иметь глобальных зависимостей.
Установка должна происходить по команде: "npm install", а запуск - по команде:
"npm run start".
Дизайн приложения остается на усмотрение разработчика, ничего сложного не
нужно.
Выполненное задание нужно загрузить в публичный репозиторий на Github, и
отправить ссылку на него в ответом письме.
Работа оценивается по следующим критериям:
1. Соответствие реализации техническому заданию.
2. Компонентный подход.
3. Правильность, чистота и стиль кода.
Время на выполнение: 7 дней.
