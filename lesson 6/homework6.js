// 1. Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let hw = 'hello world';
console.log(hw.length);
let li = 'lorem ipsum';
console.log(li.length);
let jIc = 'javascript is cool';
console.log(jIc.length);
// 2. Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
let hwUC = hw.toUpperCase();
console.log(hwUC);
let liUC = li.toUpperCase();
console.log(liUC);
let jIcUC = jIc.toUpperCase();
console.log(jIcUC);
// 3. Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let hwLC = hw.toLowerCase();
console.log(hwLC);
let liLC = li.toLowerCase();
console.log(liLC);
let jIcLC = jIc.toLowerCase();
console.log(jIcLC);
// 4. Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   ';
let newstr = str.replaceAll(' ','').replace('y','y ');
console.log(newstr);
                                  //або
console.log(str.indexOf('d')); //0
console.log(str.lastIndexOf('g')); //12
let newstr2 = str.substring(1,13);
console.log(newstr2);
// 5. Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']
let str5 = 'Каждый охотник желает знать';
let arr = str5.split(' ');
console.log(arr);
// 6. Напишіть функцію delete_characters(str, length), яка повертає підрядок,
// що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый
let delete_characters = (str, lengthstart,lengthend) => {
    let newstr = str5.substring(lengthstart,lengthend);
    document.write(newstr + '<br>');
}
delete_characters(str5, 0,7);
delete_characters(str5, 7,15);
delete_characters(str5, 15,21);
delete_characters(str5, 21,26);
// 7. Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами.
// При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

// 8. Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка
// з нижнього регістру у верхній.

// 9 Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.