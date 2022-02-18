// 1. Створити пустий масив та :
let arr = [];
//     a. заповнити його 50 парними числами за допомоги циклу.
for (let i = 0; i < 50; i++) {
    if (arr[i] % 2 === 0) {
        arr.push(arr[i]);
    }
}
//     b. заповнити його 50 непарними числами за допомоги циклу.
let arr2 = [];
for (let i = 0; i < 50; i++) {
    if (arr2[i] % 2 === 1) {
        arr.push(arr[i]);
    }
}
//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
let arr3 = [];
for (let i = 0; i < 20; i++) {
    arr3.push(Math.round(Math.random() * 300));
}
console.log(arr3);
//     d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
let arr4 = [];
for (let i = 0; i < 20; i++) {
    arr4.push(Math.round(Math.random() * (732-8)+8));
}
console.log(arr4);
// 2. Вивести за допомогою console.log кожен третій елемен
let arr5 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
for (let i = 2; i < arr5.length; i+=3) {
    console.log(arr5[i]);
}
// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
let arr6 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
for (let i = 2; i < arr6.length; i+=3) {
    if (arr6[i]%2 === 0){
    console.log(arr6[i]);
    }
}
// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним
// та записати їх в новий масив
let arr7 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
let newarr7 = [];
for (let i = 2; i < arr7.length; i+=3) {
    if (arr7[i]%2 === 0){
        newarr7.push(arr7[i]);
    }
}
console.log(newarr7);
// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
let array5 = [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ];
let newarray5 = [];
for (let i = 0; i < array5.length; i++) {
    if (array5[i] % 2 === 0) {
        newarray5.push(array5[i-1]);
        console.log(newarray5);
    }
}
// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки.
// Обрахувати середній чек.
let array6 = [100,250,50,168,120,345,188];
let sum = 0;
for (let i = 0; i < array6.length; i++) {
    sum = sum + array6[i];
}
console.log(Math.round(sum/array6.length));

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
let array7 = [];
let newarray7 = [];
for (let i = 0; i < 10; i++) {
    a = Math.round(Math.random()*100);
    array7.push(a);
    newarray7.push(a*5);
}
console.log(array7);
console.log(newarray7);
// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому,
// і якщо елемент є числом - додати його в інший масив.
let array8 = ['lesson', 1, 2, 3, 4, 'javascript', 'study', true];
let newarr8 = [];
for (let i = 0; i < array8.length; i++) {
    if (typeof array8[i] === 'number') {
        newarr8.push(array8[i]);
    }
}
console.log(newarr8);
// 9. Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
    let usersWithId = [
        {id: 1, name: 'vasya', age: 31, status: false},
        {id: 2, name: 'petya', age: 30, status: true},
        {id: 3, name: 'kolya', age: 29, status: true},
        {id: 4, name: 'olya', age: 28, status: false}
    ];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//             // TO BE CONTINUED .....
//         ]
let usersWithCities =[];
for (let i = 0; i < citiesWithId.length; i++) {
    citiesWithId.sort((a,b) => a.user_id-b.user_id);
    usersWithId[i].address = citiesWithId[i];
    usersWithCities.push(usersWithId[i]);
}
console.log(usersWithCities);
// 10. Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

// 11. Взяти масив з 10 чисел або створити його.
// Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

// 12. Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.

// 13. Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.

// 14. Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
