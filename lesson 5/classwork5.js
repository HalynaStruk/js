// Всі функції повинні бути описані стрілочним типом!!!!
// 1. створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
let numbersMin = (a,b,c) => {
    if (a<b && a<c) {
        document.write(a +'<br>');
    } else if (b<a && b<c) {
        document.write(b +'<br>');
    } else if (c<a && c<b) {
        document.write(c +'<br>');
    }
}
numbersMin(9,21,12);
// 2. створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
let numberMax = (d,e,f) => {
    if (d>e && d>f) {
        document.write(d +'<br>');
    } else if (e>d && e>f) { +'<br>'
        document.write(e +'<br>');
    } else if (f>d && f>e) {
        document.write(f +'<br>');
    }
}
numberMax(21,16,18);
// 3. створити функцію яка повертає найбільше число з масиву
let arrayMax = (arr) => {
    let max = arr[0];
    for (let arrElement of arr) {
        if (arrElement > max) {
        max = arrElement;
        }
    }
    return max;
}
document.write('Найбільше число з масиву '+ arrayMax([2,10,23,15,8,45,32]) + '<br>');
// 4. створити функцію яка повертає найменьше число з масиву
let arrayMin = (arr) => {
    let min = arr[0];
    for (let arrElement of arr) {
        if (arrElement < min) {
            min = arrElement;
        }
    }
    return min;
}
document.write('Найменше число з масиву '+ arrayMin([2,10,23,15,8,45,32]) + '<br>');
// 5. створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад [1,2,10]->13
let arraySum = (arr) => {
    let sum = 0;
    for (let arrElement of arr) {
        sum = sum + arrElement;
    }
      return sum;
}
document.write('Сума значеннь елементів масиву ' + arraySum([5,10,15]) + '<br>');
// 6. створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
let arithmetic = (arr) => {
    let sum = 0;
    for (let arrElement of arr) {
        sum = sum + arrElement;
    }
    return sum/arr.length;
}
document.write('Середнє арифметичне елементів масиву ' + arithmetic([5,10,20,15]) + '<br>');
// 7. створити функцію яка приймає будь-яку кількість чисел, повертає найменьше,
// а виводить найбільше (Math використовувати заборонено);
let numbers = (num) => {
    let max = num[0];
    let min = num[0];
    for (const numElement of num) {
        if (numElement > max) {
            max = numElement;
        }
        if (numElement < min) {
            min = numElement;
        }
    }
    document.write('Найбільше число ' + max + '<br>');
    return min;
}
document.write('Найменше число ' + numbers([3,6,1,8,25,31,3,9,24]) + '<br>');
// 8. створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

// 9. створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit.
// limit - аргумент, який характеризує кінцеве значення діапазону.

// 10. Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].