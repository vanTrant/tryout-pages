const articleContainer = document.querySelector('.article-container ul');

renderPost();

function renderPost() {
    for (let i = 0; i < postData.length; i++) {
        const li = document.createElement('li');
        li.classList.add('article-list');
        li.innerHTML = `
            <article class="article">
                <img class="article-img" src=${postData[i].imgSrc} alt="" />
                <article class="article-content">
                    <h2>${postData[i].title}</h2>
                    <p>${postData[i].content}<a class="link" href="../media-content/index.html"> Read&nbsp;more</a></p>
                    <p>
                        <small>
                            ${postData[i].author} -
                            <time datetime=${postData[i].dateNum}>${postData[i].dateText}</time>
                        </small>
                    </p>
                </article>
            </article>
        `;

        articleContainer.appendChild(li);
    }
}
