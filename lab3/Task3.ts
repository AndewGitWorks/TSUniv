// Task 3: Access enum property and get its numeric value
// Task 3: Получение числового значения из enum
// При обращении к свойству enum возвращается его числовое значение
namespace Task3{
    // Enum с дефолтными значениями (0, 1, 2, 3)
    enum Fruits
    {
        Apples,      // 0
        Bananas,     // 1
        Oranges,     // 2
        Grapes       // 3
    };
    // Получаем числовое значение свойства
    let myFruit: number = Fruits.Apples; // myFruit = 0
    console.log(myFruit); // Выведет: 0
}
