// Task 7: Enum with string values
// Task 7: Enum со строковыми значениями
// В строковых enum значения более описательны
enum Seasons
{
    Winter = 'season 1',   // Зима
    Spring = 'season 2',   // Весна
    Summer = 'season 3',   // Лето
    Autumn = 'season 4',   // Осень
};
// Присваиваем переменной строковое значение Summer
let currentSeason: Seasons = Seasons.Summer;
console.log(currentSeason); // Выведет: season 3
