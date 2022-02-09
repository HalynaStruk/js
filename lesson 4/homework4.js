// 1. створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function square(a,b) {
    return a*b;
}
console.log(square(30,40));
// 2. створити функцію яка обчислює та повертає площу кола з радіусом r
function sqrcircle(r) {
    return Math.PI * Math.pow(r,2);
}
console.log(sqrcircle(15));
// 3. створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function sqrcylinder(h,r) {
    return 2 * Math.PI * r * h;
}
console.log(sqrcylinder(50,10));
// 4. створити функцію яка приймає масив та виводить кожен його елемент
let arr = ['lesson', 1, 2, 3, 4, 'javascript', 'study', true];
function arrs(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
arrs(arr);
// 5. створити функцію яка створює параграф з текстом. Текст задати через аргумент
function paragraph(t) {
    document.write(`<p>${t}</p>`);
}
paragraph('some text');
// 6. створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function listCreator(txt) {
    document.write(`<ul>`);
    document.write(`<li>${txt}</li>`);
    document.write(`<li>${txt}</li>`);
    document.write(`<li>${txt}</li>`);
    document.write(`</ul>`);
}
listCreator('item');
// 7. створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function listCreator2(text,number) {
    document.write(`<ul>`);
    for (let i = 0; i < number; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}
listCreator2('item2',3);
// 8. створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві),та будує для них список.
let arr2 = [true, 'lesson1', 'lesson2', 'lesson3', 'lesson4', false, 'lesson5', 6, 7, 8];
function listCreatorArr2(arr2) {
    document.write(`<ul>`);
    for (let i = 0; i < arr2.length; i++) {
        document.write(`<li>${arr2[i]}</li>`);
    }
    document.write(`</ul>`);
}
listCreatorArr2(arr2);
// 9. створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.