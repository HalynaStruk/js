// Всі функції повинні бути описані стрілочним типом!!!!
// 1. створити функцію яка обчислює та повертає площу прямокутника
let square = (a,b) => a*b;
console.log(square(10,20));
// 2. створити функцію яка обчислює та повертає площу кола
let sqrcircle = (r) => Math.round(Math.PI * Math.pow(r,2));
console.log(sqrcircle(10));
// 3. створити функцію яка обчислює та повертає площу циліндру
let sqrcylinder = (h,r) => Math.round(2 * Math.PI * r * h);
console.log(sqrcylinder(30,20));
// 4. створити функцію яка приймає масив та виводить кожен його елемент
let arrs = (arr) => {for (const arrElement of arr)
    console.log(arrElement);}
arrs(['lesson', 1, 2, 3, 4, 'javascript', 'study', true]);
// 5. створити функцію яка  створює параграф з текстом. Текст задати через аргумент
let creatorP = (txt) => document.write(`<p>${txt}</p>`);
creatorP('Write some text');
// 6. створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let creatorUl = (txt) => document.write(`<ul><li>${txt}</li><li>${txt}</li><li>${txt}</li></ul>`);
creatorUl('Write some text for the paragraph items');
// 7. створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let creatorNumberList = (txt,number) => {
    document.write(`<ul>`)
    for (let i = 0; i < number; i++) {
        document.write(`<li>${txt}</li>`);
    }
    document.write(`</ul>`)
}
creatorNumberList('Additional text',5);
// 8. створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let creatorList = (arr) => {
    document.write(`<ul>`)
    for (let i = 0; i < arr.length; i++) {
        document.write(`<li>${arr[i]}</li>`);
    }
    document.write(`</ul>`)
}
creatorList([true, 'lesson1', 'lesson2', 'lesson3', 'lesson4', false, 'lesson5', 6, 7, 8])
// 9. створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
let creatorDiv = (arr) => {
    for (let i = 0; i < arr.length; i++) {
    document.write(`<div>${arr[i].id +'. '+ arr[i].name +' is '+ arr[i].age + ' years old'}</div>`)
    }
}
creatorDiv([{id: 1, name:'Max', age: 16},{id: 2, name:'Ivan', age: 18},{id: 3, name:'Anna', age: 21},
    {id: 4, name:'Ira', age: 25},{id: 5, name:'Nastya', age: 30}]);
