
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
        divGeneral.classList.add('grid-container');
        document.body.appendChild(divGeneral);

        for (const post of postsDate) {
            let divElement = document.createElement('div');
            divElement.classList.add('grid-item');
            divGeneral.appendChild(divElement);

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
fetch('https://jsonplaceholder.typicode.com/comments')
.then(response => response.json())
.then(commentsData => {
    let div = document.createElement('div');
    div.classList.add('container');
    document.body.appendChild(div);

    for (const comment of commentsData) {
        let commentElement = document.createElement('div');
        commentElement.classList.add('elementComment');
        div.appendChild(commentElement);

        let h1Coment = document.createElement('h1');
        h1Coment.innerText = `${comment.id}. ${comment.name}`;

        let h3Coment = document.createElement('h3');
        h3Coment.innerText = `email: ${comment.email}`;

        let pComent = document.createElement('p');
        pComent.innerHTML = `<b>body:</b> ${comment.body}`;

        commentElement.append(h1Coment, h3Coment, pComent);
    }
})