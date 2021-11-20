# Task 2 Testing
## Testing
Write tests for Ciphering machine CLI from 1st task.
For writing tests Jest testing framework should be used.

You can write simple unit tests on single functions (e.g. ciphering function, arguments parsing function, config validation function, etc.), mock some modules, test CLI using child processes and so on.

### Scenarios
#### Error scenarios
* Input: User passes the same cli argument twice; Result: Error message is shown; e.g.  input: node my_caesar_cli -c C1-C1-A-R0 -c C0 result: Error: You provided -c argument more than once;

* Input: User doesn't pass -c or --config argument; Result: Error message is shown;
* Input: User passes -i argument with path that doesn't exist or with no read access; Result: Error message is shown;

* Input: User passes -o argument with path to directory that doesn't exist or with no read access; Result: Error message is shown;

* Input: User passes incorrent symbols in argument for --config; Result: Error message is shown;
#### Success scenarios
Input: User passes correct sequence of symbols as argument for --config that matches regular expression; Result: test passed
Take cipher usage scenarios from first task description usage examples.

## Cross-check Testing
### Баллы за реализацию
По плюс 2 балла за каждый юнит-тест (не более 20 баллов в сумме, баллы начисляются не более чем за 3 теста на каждую отдельную функцию/компонент).
Покрытие не менее 70% плюс 20 баллов (покрытие по строкам, вычисляется при помощи jest --coverage)
В тестах задействованы все сценарии из описания плюс 20 баллов
Для тестирования используются mock-объекты плюс 20 баллов
Продвинутая реализация
Покрытие не менее 85% плюс 20 баллов (покрытие по бранчам вычисляется при помощи jest --coverage)
### Штрафы
Не используется Jest минус 80 баллов
Имеются коммиты после дедлайна, за исключением коммитов, изменяющих исключительно в Readme.md либо вспомогательные файлы (.gitignore, .prettierrc.json и т.д.) минус 30% от максимального балла за задание (-30 баллов)
Отсутствует PR либо его описание некорректно (отсутствуют либо некорректен любой из 3 обязательных пунктов) минус 20 баллов
Отсутствует отдельная ветка для разработки минус 20 баллов
Меньше 3 коммитов в ветке разработки, не считая коммиты, вносящие изменения только в Readme.md либо вспомогательные файлы (.gitignore, .prettierrc.json и т.д.) — минус 20 баллов
