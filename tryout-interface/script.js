const containerTitle = document.querySelector('.title');
const soal = document.querySelector('.soal-text');
const jawaban = document.querySelectorAll('.jawaban');
const a = document.getElementById('a-text');
const b = document.getElementById('b-text');
const c = document.getElementById('c-text');
const d = document.getElementById('d-text');
let nomor;
let currentQuiz = 0;
let hasilJawaban = [];

containerTitle.textContent = tryoutTitle;

shuffleArray(tryoutData);
loadSoal();
createDivs(tryoutData.length);

if (document.getElementById('a').checked === true) {
    console.log('jwb a');
}

// start pemilihan soal acak
function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}

function loadSoal() {
    deselectAnswer();

    const currentQuizData = tryoutData[currentQuiz];

    soal.textContent = currentQuizData.soal;
    a.textContent = currentQuizData.a;
    b.textContent = currentQuizData.b;
    c.textContent = currentQuizData.c;
    d.textContent = currentQuizData.d;
}

function deselectAnswer() {
    jawaban.forEach((e) => (e.checked = false));
}

function getSelected() {
    let userAnswer;

    jawaban.forEach((e) => {
        if (e.checked) {
            userAnswer = jawaban.id;
        }
    });
    return userAnswer;
}
// end pemilihan soal acak

function changeSoal() {
    deselectAnswer();

    let currentId = this.id;
    const div = document.getElementById(currentId);

    nomor.forEach((e) => {
        if (e.classList.contains('active')) {
            e.classList.remove('active');
        }
    });

    this.classList.add('active');

    const currentQuizData = tryoutData[currentId];

    soal.textContent = currentQuizData.soal;
    a.textContent = currentQuizData.a;
    b.textContent = currentQuizData.b;
    c.textContent = currentQuizData.c;
    d.textContent = currentQuizData.d;
}

// pembuatan navigasi nomor
function createDivs(number) {
    const nomorSoal = document.querySelector('.nomor-div');
    for (let i = 0; i < number; i++) {
        const div = document.createElement('div');

        nomorSoal.appendChild(div);
        div.classList.add('nomor');
        div.setAttribute('id', `${i}`);
        div.textContent = `${i + 1}`;
        div.addEventListener('click', () => div.classList.add('active'));
        div.addEventListener('click', changeSoal);
    }
    nomor = document.querySelectorAll('.nomor');
    nomor[0].classList.add('active');
}
// end pembuatan navigasi nomor
