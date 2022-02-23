// Взяти файл template_2.html та працювати в ньому
//    Напишіть код, який :
// a) додає клас з назвою групи, елементу з ід main_header
let mainHeader = document.getElementById('main_header');
mainHeader.classList.add('title');
// b) робить шириниу елементу ul 400px
let ulWidth = document.body.children[1];
ulWidth.style.width = '400px';
// c) робить шириниу всіх елементів з класом linkList шириною 50%
let liWidth = document.getElementsByClassName('linkList');
console.log(liWidth);
// let liWidth = document.body.children[1].getElementsByClassName('linkList');
// console.log(liWidth);
liWidth[0].style.width = '50%';
liWidth[1].style.width = '50%';
liWidth[2].style.width = '50%';
// d) отримує текст який зберігається в елементі з класом listElement2
let getListElement2 = document.getElementsByClassName('listElement2');
let txtListElement2 = getListElement2[0].textContent;
console.log(txtListElement2);
// e) отримує всі елементи li та змінює ім колір фону на сірий
let getLi = document.body.children[1];
getLi.style.background = 'grey';
// f) отримує всі елементи 'a' та додає їм клас anchor
let getEla = document.body.children[1].children;
for (let elaElement of getEla) {
    let aEl = elaElement.children;
    console.log(aEl);
    aEl[0].classList.add('anchor');
}
// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3,
// змінює йому розмір тексту на 40 пікселів

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

// j) отримує всі елементи 'sub-header' та змінює колір тексту
// у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний.
// Текст отримати з prompt()

// l) отримати елементи p та змінити їм padding на 20px

// m) отримати елементи з класом text2 та змінити їм текст на назву групи
// (mon-year. Пример sep-2021)
