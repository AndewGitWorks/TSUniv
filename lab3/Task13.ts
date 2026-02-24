let lst: NodeList = document.querySelectorAll('div');
console.log(lst);


let lst2: Map<string, HTMLElement> = 
new Map<string, HTMLElement>();
lst2.set('first', document.querySelector('div')!);
lst2.set('second', document.querySelector('ul')!);


let lst3: Set<HTMLElement> = 
new Set<HTMLElement>();
lst3.add(document.querySelector('div')!);
lst3.add(document.querySelector('ul')!);

let lst4: HTMLCollection = document.getElementsByTagName('div');