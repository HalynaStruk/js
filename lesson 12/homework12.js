
// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти.
// Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
        return response.json()
    })
    .then(postsDate => {
        let divGeneral = document.createElement('div');
        document.body.appendChild(divGeneral);
        divGeneral.classList.add('grid-container');

        for (const post of postsDate) {
            let divElement = document.createElement('div');
            divGeneral.appendChild(divElement);
            divElement.classList.add('grid-item');

            let h1 = document.createElement('h1');
            h1.innerText = post.id;

            let h3 = document.createElement('h3');
            h3.innerText = post.title;

            let p = document.createElement('p');
            p.innerText = post.body;

            divElement.append(h1, h3, p);

        }
    });



// 2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
// Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments
