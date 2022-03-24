// 1. Создать произвольный елемент с id = text.
// Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
let div = document.createElement('div');
document.body.appendChild(div);
div.id = 'text';
div.innerText = 'Some text that is hidden when you press the button "Hide text"';
let btn = document.getElementById('btn');
let parentDiv = div.parentNode;
parentDiv.insertBefore(div, btn);
btn.style.backgroundColor = '#00BFFF';
btn.style.marginTop = '10px';
btn.style.border = '#00BFFF';
btn.style.width = '70px';
btn.style.height = '20px';
btn.style.borderRadius = '4px';
btn.onclick = function () {
    document.getElementById('text').hidden = true;
};
// 2. Создайте кнопку, при клике на которую, она будет скрывать сама себя.
let div2 = document.createElement('div');
document.body.appendChild(div2);
div2.style.marginTop = '10px';
let button = document.createElement('button');
document.body.appendChild(button);
div2.appendChild(button);
button.style.backgroundColor = 'yellow';
button.innerText = 'Click and hide this button';
button.onclick = function () {
    button.hidden = true;
};
// 3. Створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18,
// та повідомити про це користувача.
let div3 = document.createElement('div');
document.body.appendChild(div3);
div3.style.marginTop = '10px';
div3.style.display = 'flex';
div3.style.columnGap = '10px';
let inputAge = document.createElement('input');
inputAge.type = 'text';
div3.appendChild(inputAge);
let inputButton = document.createElement('input');
inputButton.type = 'button';
inputButton.value = 'Read information';
inputButton.style.backgroundColor = 'yellow';
div3.appendChild(inputButton);
inputButton.onclick = function () {
    if (inputAge.value < 18) {
        alert('Ваш вік менше ніж 18');
    } else if (inputAge.value >= 18) {
        alert('Ви є повнолітньою особою');
    } else {
        alert('Ви не ввели свій вік');
    }
};
// 4. Создайте меню, которое раскрывается/сворачивается при клике
let menu = document.getElementsByClassName('menu')[0];
let titleBtn = document.getElementsByClassName('title')[0];
titleBtn.onclick = function () {
    menu.classList.toggle('hidden');
};
// 5. Создать список комментариев , пример объекта коментария -
// {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вывести список комментариев в документ, каждый в своем блоке.
// Добавьте каждому комментарию по кнопке для сворачивания его body.
let listComments = [
        {title: 'JavaScript Complex', information: 'Course duration 5 months'},
        {title: 'Java Complex', information: 'Course duration 6 months'},
        {title: 'Python Complex', information: 'Course duration 6 months'},
        {title: 'QA Complex', information: 'Course duration 4 months'},
        {title: 'FullStack', information: 'Course duration 7 months'},
        {title: 'Frontend', information: 'Course duration 4 months'}
];
let div5 = document.createElement('div');
document.body.appendChild(div5);
for (const element of listComments) {
let div = document.createElement('div');
let h1 = document.createElement('h1');
h1.innerText = element.title;
let p = document.createElement('p');
p.innerText = element.information;
let btn = document.createElement('button');
btn.innerText = 'Hide information ↑';
btn.style.background = '#00BFFF';
btn.style.border = 'solid 1px #00BFFF';
    div5.appendChild(div);
    div.append(h1, p, btn);
    btn.onclick = function () {
p.classList.toggle('hidden');
    }
}
let div4 = document.getElementsByClassName('div4')[0];
let parentDiv5 = div5.parentNode;
parentDiv5.after(div4, div5);


