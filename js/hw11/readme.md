Теоретический вопрос

Почему для работы с input не рекомендуется использовать события клавиатуры?

Ответ: потому что на совремеменных устройствах нужно отслеживать и другие способы ввода данных, например, мышью или голосом. Поэтому нужно использовать события, которые отслеживают любые изменения в поле input.

Задание
Реализовать функцию подсветки нажимаемых клавиш. Задача должна быть реализована на языке javascript, без использования фреймворков и сторонник библиотек (типа Jquery).

Технические требования:

В файле index.html лежит разметка для кнопок.
Каждая кнопка содержит в себе название клавиши на клавиатуре
По нажатию указанных клавиш - та кнопка, на которой написана эта буква, должна окрашиваться в синий цвет. При этом, если какая-то другая буква уже ранее была окрашена в синий цвет - она становится черной. Например по нажатию Enter первая кнопка окрашивается в синий цвет. Далее, пользователь нажимает S, и кнопка S окрашивается в синий цвет, а кнопка Enter опять становится черной.


Литература:

Клавиатура: keyup, keydown, keypress