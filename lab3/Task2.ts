// Task 2: Access enum using string indexing
// Task 2: Доступ к элементу enum по индексу
// При обращении к enum по числовому индексу возвращается строковое имя
enum Fruits 
{
    Apples,      // 0
    Bananas,     // 1
    Oranges,     // 2
    Grapes       // 3
}

// Получаем строку по индексу 2 ("Oranges")
let myFruit: string = Fruits[2];
console.log(myFruit); // Выведет: Oranges
