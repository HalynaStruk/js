// 1. Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить,
// до якої четверті години попадає число (в першу, другу, третю чи четверту частину години).
let time = prompt('Напишіть час');
if (time <= 15) {
    console.log('перша частина години');
} else if (time <= 30) {
    console.log('друга частина години');
} else if (time <= 45) {
    console.log('третя частина години');
} else if (time <= 59) {
    console.log('четверта частина години');
}
// 2. У змінній day дано якесь число від 1 до 31. Потрібно визначити,
// у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = prompt('Напишіть день');
if (day <=10) {
    console.log('перша частина місяця');
} else if (day <=20) {
    console.log('друга частина місяця');
} else if (day <=31) {
    console.log('третя частина місяця');
}
// 3. У нас є змінна test, якщо дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
// Перевірте роботу скрипта при test, що дорівнює true, false.
//Напишіть два варіанти скрипта - з коротким записом(тернаркою)
let test = prompt('Enter true or false');
if (test === true) {
    console.log('Вірно');
} else  {
    console.log('Неправильно');
}
                              //або
let test1 = prompt('Enter true or false');
(test1 === true) ? console.log('Вірно') :  console.log('Неправильно');
// 4. Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
// Перевірте  скрипт при a, що дорівнює 1, 0, -3
let a = +prompt('Enter number');
if (a !== 0) {
    console.log('Вірно');
} else {
    console.log('Неправильно');
}
                              //або
(a !== 0) ? console.log('Вірно') : console.log('Неправильно');
// 5. Скласти розклад на тиждень за домопоги switch.
// Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.
let schedule = prompt('Введіть порядковий номер дня тижня');
switch (schedule) {
    case '1' :
        document.write('It is Monday at 8pm lecture 1 on javascript');
        break;
    case '2' :
        document.write('It is Tuesday at 6pm practical classes');
        break;
    case '3' :
        document.write('It is Wednesday at 8pm lecture 2 on javascript');
        break;
    case '4' :
        document.write('It is Thursday at 8pm practical classes');
        break;
    case '5' :
        document.write('It is Friday at 8pm lecture 3 on javascript');
        break;
    case '6' :
        document.write('It is Saturday at 4pm English lessons');
        break;
    case '7' :
        document.write('It is Sanday day off');
        break;
}
// 6. Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.
let year = prompt('Enter year');
if (year%4 === 0) {
    console.log('Високосний рік');
} else {
    console.log('Невисокосний рік')
}
                              //або
(year%4 === 0) ? console.log('Високосний рік') : console.log('Невисокосний рік');
// 7. Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!
let n = prompt('Яка «офіційна» назва JavaScript?');
if (n === 'ECMAScript') {
    document.write('Правильно!');
} else {
    document.write('Не знаєте? ECMAScript!');
}
                              //або
(n === 'ECMAScript') ? document.write('Правильно!') : document.write('Не знаєте? ECMAScript!');