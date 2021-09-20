const tryoutContainer_div = document.querySelector('.tryout-container');
const tryoutChoice_div = document.querySelector('.tryout-choice');

const tryoutChoice = [
    {
        title: 'SBMPTN',
        url: './tryout-choice/sbmptn/index.html',
        image: 'https://www.ui.ac.id/wp-content/uploads/2021/04/SBMPTN.jpg',
    },
    {
        title: 'SIMAK-UI',
        url: './tryout-choice/simak-ui/index.html',
        image: 'https://cdn-2.tstatic.net/jakarta/foto/bank/images/universitas-indonesia_20180202_095532.jpg',
    },
    {
        title: 'UTUL-UGM',
        url: './tryout-choice/utul-ugm/index.html',
        image: 'https://mamikos.com/info/wp-content/uploads/2020/02/UGM-1.jpg',
    },
];

showCard();
setTimeout(showContent, 2000);

function showCard() {
    for (let i = 0; i < tryoutChoice.length; i++) {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
        <div class="card-header animated-bg" id="header">&nbsp;</div>
        <div class="card-content">
            <h3 class="card-title animated-bg animated-bg-text" id="title">&nbsp;</h3>
            <div class="lihat animated-bg animated-bg-btn"></div>
        </div>
        `;
        tryoutChoice_div.appendChild(card);
    }
}

function showContent() {
    const title = document.querySelectorAll('.card-title');
    const header = document.querySelectorAll('.card-header');
    const btnContainer = document.querySelectorAll('.lihat');
    const animatedBgs = document.querySelectorAll('.animated-bg');

    for (let i = 0; i < tryoutChoice.length; i++) {
        const img = document.createElement('img');
        const btn = document.createElement('button');
        const anchor = document.createElement('a');

        header[i].innerHTML = '';

        img.setAttribute('src', `${tryoutChoice[i].image}`);
        header[i].appendChild(img);

        title[i].innerHTML = '';
        title[i].innerHTML = tryoutChoice[i].title;

        anchor.classList.add('links');
        anchor.innerHTML = 'Lihat Tryout';
        anchor.setAttribute('href', `${tryoutChoice[i].url}`);
        btnContainer[i].appendChild(anchor);
    }
    animatedBgs.forEach((bg) => {
        bg.classList.remove('animated-bg');
        bg.classList.remove('animated-bg-text');
        bg.classList.remove('animated-bg-btn');
    });
}
