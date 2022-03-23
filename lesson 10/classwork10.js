// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується
// та виводиться на консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
let div1 = document.createElement('div');
document.body.appendChild(div1);
div1.style.display = 'flex';
div1.style.flexDirection = 'column';
div1.style.rowGap = '10px'

let form1 = document.createElement('form');
div1.appendChild(form1);
form1.style.display = 'flex';
form1.style.columnGap = '10px';
form1.setAttribute('name', 'formOne');
let input1_1 = document.createElement('input');
input1_1.setAttribute('name', 'input1');
let input1_2 = document.createElement('input');
input1_2.setAttribute('name', 'input2');
form1.append(input1_1, input1_2);

let form2 = document.createElement('form');
div1.appendChild(form2);
form2.style.display = 'flex';
form2.style.columnGap = '10px';
form2.setAttribute('name', 'formTwo');
let input2_1 = document.createElement('input');
input2_1.setAttribute('name', 'input3');
let input2_2 = document.createElement('input');
input2_2.setAttribute('name', 'input4');
form2.append(input2_1, input2_2);

let button1 = document.createElement('button');
document.body.appendChild(button1);
button1.innerText = 'Read information';
button1.style.background = '#00BFFF'
button1.style.border = 'solid 3px #00BFFF';
button1.style.borderRadius = '5px'
button1.style.marginLeft = '90px';
button1.style.marginTop = '10px';

button1.onclick = function () {
    console.log(formOne.input1.value);
    console.log(formOne.input2.value);
    console.log(formTwo.input3.value);
    console.log(formTwo.input4.value);
}
// - Створити 3 инпута та кнопку. Один визначає кількість рядків,
// другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
//
//
// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Якщо людина вводить слово і воно міститься в масиві не цензурних слів кинути алерт з попередженням.
// Перевірку робити при натисканні на кнопку
//
//
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку

/* Когда пользователь нажимает на кнопку,
переключение между скрытием и отображением раскрывающегося содержимого */
