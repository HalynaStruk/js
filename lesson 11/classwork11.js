// є масив -
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
// створити під кожен об'єкт свій блок з конопкою "додати до улюблених" при натисканні на яку
// об'єкт потрапляє до масиву favorites улюблених обраних об'єктів в локальному сховищі.
// Створити сторніку favorites.html при переході на яку потрібно вивест в документ
// всіх обраних на попередньому етапі.

for (const user of users) {
    let divUser = document.createElement('div');
    divUser.innerText = `Name: ${user.name}, Age: ${user.age}, Status: ${user.status}`;
    document.body.append(divUser);

    let addToFavoritesButton = document.createElement('button');
    addToFavoritesButton.innerText = 'add to favorites';
    divUser.append(addToFavoritesButton);

    addToFavoritesButton.onclick = function () {
        let users = localStorage.getItem('favorites'); // JSON string
        console.log(users);
        if (!users) {
        users = [];
        users.push(user);
        let stringify = JSON.stringify(users);
        localStorage.setItem('favorites', stringify);
        } else {
            let favoritesArray = JSON.parse(users);
            favoritesArray.push(user);
            localStorage.setItem('favorites', JSON.stringify(favoritesArray));
        }
    }
}