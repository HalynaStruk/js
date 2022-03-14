// Все робити за допомоги js.
// - створити блок,
let bloc = document.createElement('div');
// - додати йому класи wrap, collapse, alpha, beta
bloc.classList.add('wrap');
bloc.classList.add('collapse');
bloc.classList.add('alpha');
bloc.classList.add('beta');
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
bloc.style.background = 'blue';
bloc.style.color = 'yellow';
bloc.style.fontSize = '25px';
// - додати цей блок в body.
document.body.appendChild(bloc);
// - клонувати його повністю, та додати клон в body.
let cloneBloc = bloc.cloneNode(true);
document.body.appendChild(cloneBloc);
// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт
// котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
let arrays = ['Main','Products','About us','Contacts'];
let menu = document.getElementsByClassName('menu')[0];
for (let array of arrays) {
    let li = document.createElement('li');
    menu.appendChild(li);
    li.innerText = array;
}
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
//
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
