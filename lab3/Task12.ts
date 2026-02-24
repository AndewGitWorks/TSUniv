// Task 12: HTMLElement и работа с DOM
// Получение элементов DOM через querySelector

let elem: HTMLElement; // Неинициализированная переменная

// Получаем первый <div> из DOM
let elem2: HTMLElement = document.querySelector('div')!;
console.log(elem2); // [object HTMLDivElement]

// Получаем первый <ul> из DOM
let elem3: HTMLElement = document.querySelector('ul')!;
console.log(elem3); // [object HTMLUListElement]

