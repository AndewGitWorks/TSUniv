// Task 4: Enum with numeric values and type checking
// Task 4: Проверка типа enum
// Демонстрирует типобезопасность — значения вне диапазона enum могут вызвать ошибку
namespace Task4 {
    // Enum с дефолтными значениями (0, 1, 2, 3)
    enum Seasons 
    {
        Winter,    // 0
        Spring,    // 1
        Summer,    // 2
        Autumn,    // 3
    };
    // Присваиваем допустимое значение (Spring = 1)
    let a: Seasons = 1;
    // let b: Seasons = 5; // Недопустимо — 5 не входит в enum
    console.log(a); // Выведет: 1
    // console.log(b);
}
