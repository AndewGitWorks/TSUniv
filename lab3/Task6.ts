// Task 6: Enum with auto-incrementing values
// Task 6: Enum с автоинкрементом значений
// Если задать первое значение, остальные увеличиваются автоматически
namespace Task6 {
    enum Seasons 
    {
        Winter = 1,   // 1
        Spring,       // 2
        Summer,       // 3
        Autumn,       // 4
    };
    // Присваиваем переменной значение Summer (3)
    let currentSeason: Seasons = Seasons.Summer;
    console.log(currentSeason); // Выведет: 3
}
