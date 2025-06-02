function classicAdd(a, b) {
    return a + b;
}

// Стрелочная функция (полная форма)
const arrowAdd = (a, b) => {
    return a + b;
};

// Стрелочная функция (сокращенная форма)
const shortAdd = (a, b) => a + b;

console.log("1. Сложение:");
console.log("classicAdd(2, 3) =", classicAdd(2, 3));   // 5
console.log("arrowAdd(2, 3) =", arrowAdd(2, 3));       // 5
console.log("shortAdd(2, 3) =", shortAdd(2, 3));       // 5


// Без параметров
const getRandom = () => Math.random();
console.log("\n2. Случайное число:", getRandom());

// Один параметр (скобки можно опустить)
const square = x => x * x;
console.log("Квадрат 5:", square(5));  // 25

// Возврат объекта (требуются круглые скобки)
const createUser = (name, age) => ({ name, age });
console.log("Пользователь:", createUser("Anna", 28));

// Параметры по умолчанию
const greet = (name = "Гость") => `Привет, ${name}!`;
console.log(greet());         // Привет, Гость!
console.log(greet("Иван"));   // Привет, Иван!


const numbers = [1, 2, 3, 4, 5];

console.log("\n3. Обработка массива:");
console.log("Исходный массив:", numbers);

// Фильтрация четных чисел
const evens = numbers.filter(n => n % 2 === 0);
console.log("Четные числа:", evens);  // [2, 4]

// Увеличение всех элементов в 2 раза
const doubled = numbers.map(n => n * 2);
console.log("Удвоенные значения:", doubled);  // [2, 4, 6, 8, 10]

// Сумма всех элементов
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("Сумма элементов:", sum);  // 15


console.log("\n4. Контекст выполнения (this):");

// Создаем объект для демонстрации
const contextExample = {
    name: "Тестовый объект",


    classicMethod: function() {
        console.log("classicMethod this:", this?.name);
    },


    arrowMethod: () => {
        console.log("arrowMethod this:", this?.name);
    }
};

contextExample.classicMethod();
contextExample.arrowMethod();


console.log("\n5. Объект arguments:");


function showArgs() {
    console.log("Обычная функция:", arguments);
}

// Стрелочная функция (используем rest-оператор)
const showArrowArgs = (...args) => {
    console.log("Стрелочная функция:", args);
};

showArgs(1, "a", true);
showArrowArgs(1, "a", true);

console.log("\nПрограмма успешно выполнена!");