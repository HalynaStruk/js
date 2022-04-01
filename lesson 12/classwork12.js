// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
// зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок
// всі коментарі поточного поста
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {return response.json();})
    .then(postsData => {
        let divGeneral = document.createElement('div');
        divGeneral.classList.add('grid-container');
        document.body.appendChild(divGeneral);

        for (const post of postsData) {
            let divElement = document.createElement('div');
            divElement.innerHTML = `
            <div><h1>${post.id}. ${post.title}</h1>
            <p><b>body:</b> ${post.body}</p></div>
<!--            <div><button class="btn">Comments</button><div class="commentHide"></div></div>-->
            `;
            divElement.classList.add('grid-item');
            divGeneral.append(divElement);

            let divBtn = document.createElement('div');
            divElement.appendChild(divBtn);

            let btn = document.createElement('button');
            btn.innerText = 'Comments';
            btn.classList.add('btn');
            divBtn.appendChild(btn);

            let divComent = document.createElement('div');
            divBtn.appendChild(divComent);

            btn.onclick = function () {
                divComent.classList.toggle('hidden');
                fetch('https://jsonplaceholder.typicode.com/comments')
                    .then(response => response.json())
                    .then(commentsData => {
                        for (const comment of commentsData) {
                            if (comment.id === post.id) {

                                let commentElement = document.createElement('div');
                                commentElement.classList.add('elementComment');
                                divElement.appendChild(divComent);
                                divComent.appendChild(commentElement);

                                commentElement.innerHTML = `
                                        <h1>id: ${comment.id}</h1>
                                        <h1>name: ${comment.name}</h1>
                                        <h3>email: ${comment.email}</h3>
                                        <p>body: ${comment.body}</p>
                                        `;
                            }

                        }

                    })

        }
        }
    })
