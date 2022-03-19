// 1. Создать произвольный елемент с id = text.
// Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
let div = document.createElement('div');
document.body.appendChild(div);
div.id = 'text';
div.innerText = 'Some text';
let btn = document.getElementById('btn')
let parentDiv = div.parentNode;
parentDiv.insertBefore(div, btn);
btn.onclick = function () {
    document.getElementById('text').hidden = true;
}

// 2. Создайте кнопку, при клике на которую, она будет скрывать сама себя.
l
// 3. створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18,
// та повідомити про це користувача
//
// 4. Создайте меню, которое раскрывается/сворачивается при клике
//
//
// 5. Создать список комментариев , пример объекта коментария -
// {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вывести список комментариев в документ, каждый в своем блоке.
// Добавьте каждому комментарию по кнопке для сворачивания его body.