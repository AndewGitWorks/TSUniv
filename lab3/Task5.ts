// Task 5: Enum for months with specific numeric values
// Task 5: Enum для месяцев года
// Можно получить строковое имя месяца по его номеру
enum Months {
    January = 1,      // Январь — 1
    February = 2,     // Февраль — 2
    March = 3,        // Март — 3
    April = 4,        // Апрель — 4
    May = 5,          // Май — 5
    June = 6,         // Июнь — 6
    July = 7,         // Июль — 7
    August = 8,       // Август — 8
    September = 9,    // Сентябрь — 9
    October = 10,     // Октябрь — 10
    November = 11,    // Ноябрь — 11
    December = 12     // Декабрь — 12
};
// Получаем имя месяца по номеру
console.log(Months[1]);   // Выведет: January
console.log(Months[5]);   // Выведет: May
