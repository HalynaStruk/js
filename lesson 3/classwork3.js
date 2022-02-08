// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
let arrs = [2,17,13,6,22,31,45,66,100,-18];
// 1. перебрати його циклом while
let i = 0;
while (i<arrs.length) {
    console.log(arrs[i]);
    i++
}
// 2. перебрати його циклом for
for (let arr of arrs) {
    console.log(arr);
}
// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
let x = 0;
while (x<arrs.length) {
    if (x%2 === 1){
    console.log(arrs[x]);
}
    x++
}
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
for (let j = 0; j < arrs.length; j++) {
    if (j%2 === 1) {
        console.log(arrs[j]);
    }
}
// 5. перебрати циклом while та вивести  числа тільки парні  значення
let h = 0;
while (h<arrs.length) {
    if (h%2 === 0) {
        console.log(arrs[h]);
    }
    h++
}
// 6. перебрати циклом for та вивести  числа тільки парні  значення
for (let n = 0; n < arrs.length; n++) {
    if (n%2 === 0) {
      console.log(arrs[n]);
    }
}
// 7. замінити кожне число кратне 3 на слово "okten"
for (g = 0; g < arrs.length; g++) {
    if (arrs[g]%3 === 0) {
        arrs[g] = 'okten';
        console.log(arrs[g]);
    }
}
console.log(arrs);
// 8. вивести масив в зворотньому порядку.
for (let m = arrs.length-1; m >= 0; m--) {
    document.write(arrs[m]+'<br>');
}
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
                        // 1.
let i1 = arrs.length-1;
while (i1>= 0) {
    console.log(arrs[i1]);
    i1--
}
                        // 2.
for (let arr = arrs.length-1; arr >= 0; arr--) {
    document.write(arrs[arr]+'<br>');
}
                        // 3.
let x3 = arrs.length-1;
while (x3>=0) {
    if (x3%2 === 1){
        console.log(arrs[x3]);
    }
    x3--
}
                        // 4.
for (let j = arrs.length-1; j >= 0; j--) {
    if (j%2 === 1) {
        console.log(arrs[j]);
    }
}
                        // 5.
let h5 = arrs.length-1;
while (h5>=0) {
    if (h5%2 === 0) {
        console.log(arrs[h5]);
    }
    h5--
}
                        // 6.
for (let n = arrs.length-1; n >= 0; n--) {
    if (n%2 === 0) {
        console.log(arrs[n]);
    }
}
                        // 7.
for (g = arrs.length-1; g >= 0; g--) {
    if (arrs[g]%3 === 0) {
        arrs[g] = 'okten';
        console.log(arrs[g]);
    }
}
console.log(arrs);