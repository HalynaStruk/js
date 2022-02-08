// 1. створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
let numbers = [3,9,12,15,21];
let words = ['yellow','blue','green','black','white'];
let all = ['study','red',5,33,true];
console.log(numbers);
console.log(words);
console.log(all);
// 2. Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу.
// Вивести в консоль
let empty = [];
for (let emptyElement of empty) {

}
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
for (let i = 0; i < 10; i++) {
    document.write(`<div>text</div>`);
}
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for (let i = 0; i < 10; i++) {
    document.write(`<div>text ${i} text</div>`);
}
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let q = 0;
while (q < 20) {
    document.write(`<h1>some text</h1>`);
    q++
}
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let w = 0;
while (w < 20) {
    document.write(`<h1>some ${w} text</h1>`);
    w++
}
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let arr10num = [23,14,78,90,3,54,37,87,91,2];
for (let i = 0; i < arr10num.length; i++) {
    console.log(arr10num[i]);
}
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let arr10word = ['winter','autumn','spring','summer','snow','rain','wind','sun','heat','cold'];
for (let i = 0; i < arr10word.length; i++) {
    console.log(arr10word[i]);
}
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let anytype = [true,3,'one',-21,'two',27,'three',100,false,'four'];
for (let i = 0; i < anytype.length; i++) {
    console.log(anytype[i]);
}
// - Створити масив з 10 елементів числового, стірчкового і булевого типу.
// За допомогою if та typeof вивести тільки булеві елементи
let numstrbool = [121,33,false,'javascript','study',true,10,51,-145,55];
for (let i = 0; i < numstrbool.length; i++) {
    if (typeof numstrbool[i] === 'boolean') {
        console.log(numstrbool[i]);
    }
}
// - Створити масив з 10 елементів числового, стірчкового і булевого типу.
// За допомогою if та typeof вивести тільки числові елементи
let numstrbool2 = [true, false, 20, 40, 50, 60, 'day', 'night', 'morning', 'evening'];
for (let i = 0; i < numstrbool2.length; i++) {
    if (typeof numstrbool2[i] === 'number') {
        console.log(numstrbool[i]);
    }
}
// - Створити масив з 10 елементів числового, стрічкового і булевого типу.
// За допомогою if та typeof вивести тільки рядкові елементи
let numstrbool3 = [20, 11, 7, 24, true, false, 'day', 'night', 'study', 'javascript'];
for (let i = 0; i < numstrbool3.length; i++) {
    if (typeof numstrbool3[i] === 'string') {
      console.log(numstrbool3[i]) ;
    }
}
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами)
// через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
let emptyarrs = [];
emptyarrs[0] = 'skiing';
emptyarrs[1] = 'nowboard';
emptyarrs[2] = 'skating';
emptyarrs[3] = 'sled';
for (let i = 0; i < emptyarrs.length; i++) {
    console.log(emptyarrs[i]);
}
// - Створити цикл for на 10  ітерацій з кроком 1.
// Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 10; i++) {
    document.write (i +"<br/>");
    console.log(i);
}
// - Створити цикл for на 100 ітерацій з кроком 1.
// Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 100; i++) {
    document.write (i);
    console.log(i);
}
// - Створити цикл for на 100 ітерацій з кроком 2.
// Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 100; i+=2) {
    document.write (i);
    console.log(i);
}
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (let i = 0; i < 100; i-=1) {
    document.write (i);
    console.log(i);
}
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write