# ciphering-cli

## Запуск программы:
node ciphering.js -i inputFile.name -o outputFile.name -c C0-R0-A
node ciphering.js --input inputFile.txt --output outputFile.txt --config C0-R0-A

## Параметры:

### !обязательный параметр:
-с или --config  - Кофиг последовательного применения разных алгоритмов шифрования

### Необязательные параметры:
-i или --input   - Путь к файлу с исходным текстом в формате txt, кодировка utf8

-o или --output  - Путь к файлу для сохранения зашифрованного текста в формате txt

в случае отсутствия параметра, будет использоваться консоль


При работе с терминалом остановить работу можно введя строку unpipe terminal
либо сочетанием клавиш ctrl + c
