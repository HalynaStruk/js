// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!

// - Напишіть код, котрий :
// 1. отримує текст з параграфа з id "content"
let content = document.querySelector("#content");
let text = content.textContent;
console.log(content);
                        //або
let content1 = document.getElementById("content");
console.log(content1);
// 2. отримує текст з блоку з id "rules"
let content2 = document.getElementById("rules");
console.log(content2);
// 3. замініть текст параграфа з id 'content' на будь-який інший
content1.innerText = 'Hello';
// 4. замініть текст параграфа з id 'rules' на будь-який інший
content2.innerHTML = '<i>This is lesson 8 with javascript</i>';
// 5. змініть кожному елементу колір фону на червоний
    content1.style.background = 'red';
    content2.style.background = 'red';
    console.log(document.body.children);
    let ulBlock = document.body.children[2];
    ulBlock.style.background = 'red';
// 6. змініть кожному елементу колір тексту на синій
content1.style.color = 'blue';
content2.style.color = 'blue';
ulBlock.style.color = 'blue';
// 7. отримати весь список класів елемента з id=rules і вивести їх в console.log
let classListDiv = document.getElementById("rules");
console.log(classListDiv.classList);
// 8. поміняти колір тексту у всіх елементів fc_rules на червоний
let elements = document.getElementsByClassName('fc_rules');
console.log(elements)
elements[0].style.color = '#dc0404';
elements[1].style.color = '#dc0404';
elements[2].style.color = '#dc0404';
elements[3].style.color = '#dc0404';
                            //або
let elemColor = document.body.children[2];
elemColor.style.color = '#dc0404';
