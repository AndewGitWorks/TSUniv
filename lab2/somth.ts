// ! Упражнение 3
let test1 : string = "Hello, World!";
let test2 : number = 42;
let test3: boolean = true;
// ! Упражнение 4
let testNew: string = 'abc';
testNew = 'def';

//#region 
let testTest: number = 123;
testTest = 'abc'; // Ошибка: Type 'string' is not assignable to type 'number'

let testTest2: string = 'abc';
testTest2 = 123; // Ошибка: Type 'number' is not assignable to type 'string'

let testTest3: string = 'abc';
testTest3 = '123'; 

let testTest4: string = 'abc';
testTest4 = true; // Ошибка: Type 'boolean' is not assignable to type 'string'

let testTest5: string = '123';
testTest5 = '456';

let testTest6: number = 123;
testTest6 = 456;

//#endregion

// ! Упражнение 5
let test15 : number = 123;
let test25 : number = 456;
console.log(test15 + test25); // output: 579

let test15String : string = "123";
let test25String : string = "456";
console.log(test15String + test25String); // output: "123456"

let test153String : string = "123";
let test253String : string = "456";
let test153Number : number = test153String + test253String; // Ошибка: Type 'string' is not assignable to type 'number' 

let test153String1 : number = 123;
let test253String2 : number = 456;
let test153Number2 : string = test153String1 + test253String2; // Ошибка: Type 'number' is not assignable to type 'string'

let test153String12 : number = 123;
let test253String22 : number = 456;
let test153Number22 : string = test153String1+ ' ' + test253String2; // output "123 456"

let num: number = 123;
let num2: number = 456;
let symb: string = "!";
let string: string = num + num2 + symb; // output: "579!"
// ! Упражнение 6
let arr: Array<number> = [1, 2, 3, 4, 5];
let arr2: number[] = [1, 2, 3, 4, 5];
// ! Упражнение 7
let user = {
    year: 2003,
    month: 5,
    day: 15,
}
// ! Упражнение 8
let dateObj: {
    year: 2025,
    month: 12,
    day: 12,
}
dateObj = '2025-12-12'; // Ошибка: Type 'string' is not assignable to type '{ year: number; month: number; day: number; }'
// ! Упражнение 9
let date9code1 = 
{
    year: 2025,
    month: 12,
    day: 31,
}
date9code1 =
{
    year: 2025,
    month: 12,
} // Ошибка: Property 'day' is missing in type '{ year: number; month: number; }' but required in type '{ year: number; month: number; day: number; }'
let date9code2 =
{
    year : 2025,
    month: 12,
    day: 31,
}
date9code2 = 
{
    year: 2025,
    month: 11,
    day: 30,
}

// ! Упражнение 11
let res = 0;
for (let i: number = 1; i <= 100; i++){
    res += i;
}
// console.log(res);
// ! Упражнение 12
let arr12: Array<number> = [1, 2, 3, 4, 5];
let res12 = 0;
for (let elem of arr12)
{
    res12 += elem;
}
// console.log(res12);
// ! Упражнение 13
let obj: { [key: string]: number } = {a:1, b:2, c:3};
let res13 = 0;
for (let key in obj)
{
    let elem = obj[key];
    res13 += elem;
}
// console.log(res13);
// ! Упражнение 14
function sum(a: number, b: number): number
{
    return a + b;
}
function sumNew(arr: number[]): number
{
    let res = 0;
    for (let elem of arr){
        res += elem;
    }
    return res;
}
// ! Упражнение 15
function func15(text: string)
{
    console.log(text);
}
// ! Упражнение 16
let test151: number = 123;
let test152: string = "abc";
let test153: any;
test153 = test151;
console.log(test153); // output: 123
test153 = test152;
console.log(test153); // output: abc
// ! Упражнение 18
let arr17 : Array<any> = [1, "abc", true, {key: "value"}, [1, 2, 3]];
// ! Упражнение 19
let test19 : null | number;
let test19New: number | boolean | string;
// ! Упражнение 20
type custom = null | undefined;
type custom2 = null | undefined | boolean;
// ! Упражнение 21
let str: 'error' | 'waring' | 'success';
// ! Упражнение 22
let date: [number,number];
let dateWithMonth: [number,string];
let dateFull: [number,number,number];
// ! Упражнение 23
let timeTest : [number, number, number] = [12, 59, 59];
timeTest[0] = 13;
console.log(timeTest); // output: [13, 59, 59]

let timeTest2 : [number, number, number] = [12, 59, 59];
timeTest2[0] = '01'; // Ошибка: Type 'string' is not assignable to type 'number'
console.log(timeTest2); // output: Exeption
// ! Упражнение 24
let timeTest3: readonly [number,number,number] = [12, 59, 59];
timeTest3[0] = 13; // Ошибка: Cannot assign to '0' because it is a read-only property
console.log(timeTest3); // output: Exeption
// ! Упражнение 25
let date25 : [number, number?, number?] = [2024, 6];
// ! Упражнение 26
let time: [number, number, number] = [12, 59, 59];
let [hours, minutes, seconds] = time;
// ! Упражнение 27
let tpl: [string, string, ...number[]] = ["abc", "def", 1, 2, 3, 4, 5];
let tplNew: [number, boolean, ...string[]] = [42, true, "abc", "def", "ghi"];
