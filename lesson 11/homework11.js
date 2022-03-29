// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage
let btn = document.getElementById('btn');
let nameInput = document.getElementById('name');
let ageInput = document.getElementById('age');

btn.onclick = function () {
    let obj = {
        name: nameInput.value,
        age: ageInput.value
    };
    localStorage.setItem('objKey', JSON.stringify(obj));
};
// -створити форму з інпутами для model,type та volume автівки.
//  при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.

let btn2 = document.getElementById('btn2');
let modelInput = document.getElementById('model');
let typeInput = document.getElementById('type');
let volumeInput = document.getElementById('volume');
btn2.onclick = function () {
            let car = {
            model: modelInput.value,
            type: typeInput.value,
            volume: volumeInput.value
        };
    let cars = JSON.parse(localStorage.getItem('carsKey'));
    if (!cars) {
        localStorage.setItem('carsKey', JSON.stringify([car]));
    } else {
        cars.push(car);
        localStorage.setItem('carsKey', JSON.stringify(cars));
    }
}