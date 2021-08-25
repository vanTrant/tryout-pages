const article = document.querySelector('.article');
const articleTitle = document.querySelector('.article-title');
const imgContent = document.querySelector('.img-content');
const contentContainer = document.querySelector('.article-content-container');
const articleAuthor = document.querySelector('.article-author');
const previousBtn = document.querySelector('.previous-btn');
const icon = document.querySelector('.fa-arrow-alt-circle-left');

articleTitle.textContent = `${articleData.title}`;
imgContent.setAttribute('src', articleData.imgSrc);

for (let para = 0; para < articleData.content.length; para++) {
    const p = document.createElement('p');

    p.classList.add('article-content');
    p.innerHTML = `${articleData.content[para]}`;

    contentContainer.appendChild(p);
}

articleAuthor.innerHTML = `
    <p>
        <small>
            ${articleData.author} -
            <time datetime="${articleData.dateNum}">${articleData.dateText}</time>
        </small>
    </p>
`;

previousBtn.addEventListener('mouseover', () => {
    icon.classList.remove('far');
    icon.classList.add('fas');
});

previousBtn.addEventListener('mouseout', () => {
    icon.classList.remove('fas');
    icon.classList.add('far');
});

previousBtn.addEventListener('click', () => {
    history.back();
});
