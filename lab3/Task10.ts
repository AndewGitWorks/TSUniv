// Task 10: Операции замены в строках
// Демонстрация различных способов замены текста в строках

// Заменяет первое вхождение 'a' на '!'
let str: string = 'bab'.replace('a', '!');
console.log(str); // b!b

// Заменяет '/a/' как обычную строку (не регулярное выражение)
let str2: string = 'bab'.replace('/a/', '!');
console.log(str2); // bab (нет совпадения)

// Заменяет 'x.x' как строку (точка не работает как любой символ)
let str3: string = 'xax eee'.replace('x.x', '!');
console.log(str3); // xax eee

// Заменяет только первое 'a' на '!'
let str4: string = 'aab'.replace('a', '!');
console.log(str4); // !ab

// Заменяет все 'a' на '!' с помощью регулярки
let str5: string = 'aab'.replace(/a/g, '!');
console.log(str5); // !!b

// Заменяет все совпадения шаблона 'a.b' (a + любой символ + b) на '@'
let str6: string = 'ahb acb aeb aeeb adcd axeb'.replaceAll('a.b', '@');
console.log(str6); // @ @ @ aeeb adcd @

// Заменяет все совпадения шаблона 'a..a' (a + 2 любых символа + a) на '&'
let str7: string = 'aba aca aea abba adca abea'.replaceAll('a..a', '&');
console.log(str7); // & & & abba & &

// Заменяет все совпадения шаблона 'ab.a' (ab + любой символ + a) на '!'
let str8: string = 'aba aca aea abba adca abea'.replaceAll('ab.a', '!');
console.log(str8); // ! aca aea ! adca !
