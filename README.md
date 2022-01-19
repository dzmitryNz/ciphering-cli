Клонируйте репозиторий 
git clone https://github.com/dzmitryNz/ciphering-cli.git

установите зависимости
npm install

запуск тестов
npm run test

запуск тестов c расчётом покрытия
npm run test-coverage

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


