// 1. Дано список імен.
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
let n1 = 'Harry..Potter'
let n2 = 'Ron---Whisley'
let n3 = 'Hermione__Granger'
let normalizationname = (name,sign) => {
if (name.includes(sign)) {
    let arr = name.split(sign);
    let newname = arr.join(' ');
    console.log(newname);
}
}
normalizationname(n1,'..');
normalizationname(n2,'---');
normalizationname(n3,'__');
// 2. створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
let random = (length) => {
    let arr = [];
    for (let i = 0; i < length; i++) {
        arr[i] = Math.round(Math.random()*100);
        // arr.push(Math.round(Math.random()*100));

    }
   return arr;
}
document.write(random(5) + '<br>');
// 3. створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// Відсортувати його за допомоги sort
document.write(random(10).sort((current,next) => current - next) + '<br>');
document.write(random(15).sort((current,next) => next - current) + '<br>');
// 4. створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// Відфільтрувати  його за допомоги filter, залишивши тільки парні числа
let filter = (length) => {
    let arr = [];
    for (let i = 0; i < length; i++) {
         arr.push(Math.round(Math.random()*100));
    }
    return arr.filter(arg => arg % 2 === 0);
}
document.write(filter(20) + '<br>');
// 5. створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) .
// За допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
let transformationArrToStr = (length) => {
    let arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(Math.round(Math.random()*100));
    }
    return arr.map(arg => arg.toString());
}
console .log(transformationArrToStr(20));
// 6. створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]

// 7. є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців