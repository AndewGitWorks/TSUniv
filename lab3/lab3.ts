// ============================================================
// Lab 3: TypeScript Enums and Type System
// ============================================================
// This file contains reference code for various TypeScript concepts
// including enums (numeric and string), type annotations, and more.
// 
// Note: Each task has been extracted to individual files:
// - Task1.ts through Task15.ts
// These files contain the fully commented implementations.
// ============================================================

// // ! Task 1
// // enum weekDays 
// // {
// //     Monday = 1,
// //     Tuesday = 2,
// //     Wednesday = 3,
// //     Thursday = 4,
// //     Friday = 5,
// //     Suturday = 6,
// //     Sunday = 7
// // }
// // ! Task 2
// // enum Fruits 
// // {
// //     Apples,
// //     Bananas,
// //     Oranges,
// //     Grapes
// // }
// // let myFruit: string = Fruits[2];
// // console.log(myFruit);
// // ! Task 3
// // enum Fruits
// // {
// //     Apples,
// //     Bananas,
// //     Oranges,
// //     Grapes
// // };
// // let myFruit: number = Fruits.Apples;
// // console.log(myFruit);
// // ! Task 4
// // enum Seasons 
// // {
// //     Winter,
// //     Spring,
// //     Summer,
// //     Autumn,
// // };
// // let a: Seasons = 1;
// // let b: Seasons = 5;
// // ! Task 5
// // enum Months {
// //     January = 1,
// //     February = 2,
// //     March = 3,
// //     April = 4,
// //     May = 5,
// //     June = 6,
// //     July = 7,
// //     August = 8,
// //     September = 9,
// //     October = 10,
// //     November = 11,
// //     December = 12
// // };
// // console.log(Months[1]);
// // console.log(Months[5]);

// // ! Task 6
// // enum Seasons 
// // {
// //     Winter = 1, 
// //     Spring,
// //     Summer,
// //     Autumn,
// // };
// // let currentSeason: Seasons = Seasons.Summer;


// //console.log(currentSeason);
// // ! Task 7
// enum Seasons
// {
//     Winter = 'season 1',
//     Spring = 'season 2',
//     Summer = 'season 3',
//     Autumn = 'season 4',
// };
// let currentSeason: Seasons = Seasons.Summer;
// console.log(currentSeason);


// enum weekDays 
// {
//     Monday = 1,
//     Tuesday = 2,
//     Wednesday = 3,
//     Thursday = 4,
//     Friday = 5,
//     Suturday = 6,
//     Sunday = 7
// }


// enum Months {
//     January = 1,
//     February = 2,
//     March = 3,
//     April = 4,
//     May = 5,
//     June = 6,
//     July = 7,
//     August = 8,
//     September = 9,
//     October = 10,
//     November = 11,
//     December = 12
// };
// // ! Task 8
// /* TypeScript включает все встроенные типы JavaScript 
// (string, number, boolean, null, undefined, symbol, bigint, object) 
// и добавляет собственные статические типы, существующие только на 
// этапе разработки: any, unknown, never, void, enum, tuple, а также 
// union и intersection типы.  */ 
// // ! Task 9
// let date: Date;


// let date2 : Date = new Date(2030, 11, 31);
// console.log(date2);
// // ! Task 10
// let str: string = 'bab'.replace('a', '!');
// console.log(str);
// let str2: string = 'bab'.replace('/a/', '!');
