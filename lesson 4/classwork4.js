// 1. створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
function numbermin(a,b,c) {
    if (a<b && a<c) {
        document.write(a +'<br>');
    } else if (b<a && b<c) {
        document.write(b +'<br>');
    } else if (c<a && c<b) {
        document.write(c +'<br>');
    }
}
numbermin(3,12,9);
// 2. створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
function numbermax(x,y,z) {
    if (x>y && x>z) {
        document.write(x +'<br>');
    } else if (y>x && y>z) { +'<br>'
        document.write(y +'<br>');
    } else if (z>x && z>y) {
        document.write(z +'<br>');
    }
}
numbermax(3,12,9);
// 3. створити функцію яка повертає найбільше число з масиву
let arrayMax = [125,1,3,6,9,12,18,21];
function arr(arrayMax) {
    for (let i = 0; i < arrayMax.length; i++) {
        if (arrayMax[i] > arrayMax[0]) {
            arrayMax[0] = arrayMax[i];
        }
    }
    return arrayMax[0];
}
document.write(arr(arrayMax) + '<br>');
// 4. створити функцію яка повертає найменьше число з масиву
let arrayMin = [1,3,6,9,125,12,18,21];
function arrmin(arrayMin) {
    for (let i = 0; i < arrayMin.length; i++) {
         if (arrayMin[i] < arrayMin[0]) {
             arrayMin[0] = arrayMin[i];
         }
    }
    return arrayMin[0];
}
document.write(arrmin(arrayMin) + '<br>');
// 5. створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад [1,2,10]->13
let arrnumbers = [25,50,35,15];
function funarr(arrnumbers) {
    let sum = 0;
    for (let i = 0; i < arrnumbers.length; i++) {
       sum = sum + arrnumbers[i];
    }
    return sum;
}
document.write(funarr(arrnumbers) + '<br>');
// 6. створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
let numbers = [30,60,90,120];
function arithmetic(numbers) {
    let sum1 = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum1 = sum1 + numbers[i];
    }
    return sum1/numbers.length;
}
document.write(arithmetic(numbers) + '<br>');
// 7. створити функцію яка приймає будь-яку кількість чисел, повертає найменьше,
// а виводить найбільше (Math використовувати заборонено);

// function retMinConsMax(anynumbers) {
//     for (let i = 0; i < anynumbers.length; i++) {
//         if (anynumbers[i] > anynumbers[0]) {
//             anynumbers[i] = max;
//         }
//         if (anynumbers[i] < anynumbers[0]) {
//             anynumbers[i] = min;
//         }
//     }
//     console.log(max);
//     return min;
// }
// document.write(retMinConsMax([5,15,3,27]) + '<br>');

// function minMax(arg) {
//     let min = arguments[0];
//     let max = arguments[0];
//     for (const element of arguments) {
//         if (element > max) {
//             max = element;
//         }
//         if (element < min) {
//             min = element;
//         }
//     }
//     console.log("max ", max);
//     return min;
// }
// document.write('Мінімальне число з введених: ' + minMax(100, 20, 3, 100, 2021))
// 8. створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

function generatesran(quantity) {
    let arrayRandom = [];
    for (let i = 0; i < quantity; i++) {
        r = Math.round(Math.random()*100);
        arrayRandom.push(r);
    }
    console.log(arrayRandom);
}
generatesran(20);
// 9. створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit.
// limit - аргумент, який характеризує кінцеве значення діапазону.
function generateslim(quantity,limit) {
    let arrayLimit = [];
    for (let i = 0; i < quantity; i++) {
        l = Math.round(Math.random()*limit);
        arrayLimit.push(l);
    }
    console.log(arrayLimit);
}
generateslim(15,400);
// 10. Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
function generates(quantity) {
    let arr = [];
    for (let i = 0; i < quantity; i++) {
        g = Math.round(Math.random()*100);
        arr.push(g);
    }
    console.log(arr);
    arr[i] = arr[k];
    for (let k = arr.length-1; k >=0 ; k--) {
    }
    console.log(arr);
}
generatesran(5);
