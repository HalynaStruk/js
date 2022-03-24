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
let div2 = document.createElement('div');
document.body.appendChild(div2);
div2.style.display = 'flex';
div2.style.alignItems = 'end';
div2.style.columnGap = '10px';
div2.style.margin = '10px';

let divInput1 = document.createElement('div');
let p1 = document.createElement('p');
p1.innerText = 'Кількість рядків';
let input1 = document.createElement('input');
divInput1.append(p1,input1);
let divInput2 = document.createElement('div');
let p2 = document.createElement('p');
p2.innerText = 'Кількість ячейок';
let input2 = document.createElement('input');
divInput2.append(p2,input2);
let divInput3 = document.createElement('div');
let p3 = document.createElement('p');
p3.innerText = 'Вміст ячейок';
let input3 = document.createElement('input');
divInput3.append(p3,input3);
let button2 = document.createElement('button');
button2.innerText = 'Form table';
button2.style.background = 'yellow';
button2.style.border = 'solid 3px #00BFFF';
button2.style.borderRadius = '5px';
button2.style.height = '30px';
div2.append(divInput1, divInput2, divInput3, button2);

button2.onclick = function () {
    let tr = input1.value;
    let td = input2.value;
    let contents = input3.value;
function table(row, column, txt) {
let div = document.createElement('div');
document.body.appendChild(div);
let table = document.createElement('table');
div.appendChild(table);
table.style.border = '3px solid black';
    for (let i = 0; i < row; i++) {
        let row = document.createElement('tr');
        row.style.border = '2px solid #00BFFF';

    for (let y = 0; y < column; y++) {
        let column = document.createElement('td');
        table.appendChild(row);
        row.appendChild(column);
        column.style.border = '2px solid yellow';
        column.innerText = `${txt}`;
    }
    }
}
    table(tr, td, contents);
}

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
