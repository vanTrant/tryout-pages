const body = document.querySelector('body');
const containerTitle = document.querySelector('.title');
const imgContainer = document.querySelector('.img-container');
const soalImg = document.querySelector('.soal-img');
const soal = document.querySelector('.soal-text');
const jawaban = document.querySelectorAll('.jawaban');
const submitBtn = document.querySelector('.submit-btn');
const a = document.getElementById('a-text');
const b = document.getElementById('b-text');
const c = document.getElementById('c-text');
const d = document.getElementById('d-text');
let nomor;
let currentQuiz = 0;
let nomorSoal = [];
let hasilJawaban = [];

containerTitle.textContent = tryoutTitle;

shuffleArray(tryoutData);
loadSoal();
createDivs(tryoutData.length);

jawaban.forEach((opsi) => {
    opsi.addEventListener('click', saveAnswer);
});

submitBtn.addEventListener('mousedown', () => submitBtn.classList.add('mousedown'));
submitBtn.addEventListener('mouseup', () => submitBtn.classList.remove('mousedown'));
submitBtn.addEventListener('mouseup', showPopup);

// fungsi untuk pemilihan soal acak
function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}

// fungsi untuk menampilkan soal pertama, selanjutnya dilanjut oleh fungsi changeSoal()
function loadSoal() {
    const currentQuizData = tryoutData[currentQuiz];

    soal.textContent = currentQuizData.soal;
    a.textContent = currentQuizData.a;
    b.textContent = currentQuizData.b;
    c.textContent = currentQuizData.c;
    d.textContent = currentQuizData.d;
    if (currentQuizData.imgUrl !== '#') {
        imgContainer.style.display = 'block';
        soalImg.setAttribute('src', currentQuizData.imgUrl);
    } else imgContainer.style.display = 'none';
}

function deselectAnswer() {
    jawaban.forEach((e) => (e.checked = false));
}

function changeSoal() {
    deselectAnswer();

    nomor.forEach((e) => {
        if (e.classList.contains('active')) {
            e.classList.remove('active');
        }
    });

    this.classList.add('active');

    const currentQuizData = tryoutData[this.id];
    nomorSoal = [tryoutData[this.id].nomor];

    soal.textContent = currentQuizData.soal;
    a.textContent = currentQuizData.a;
    b.textContent = currentQuizData.b;
    c.textContent = currentQuizData.c;
    d.textContent = currentQuizData.d;

    if (currentQuizData.imgUrl !== '#') {
        imgContainer.style.display = 'block';
        soalImg.setAttribute('src', currentQuizData.imgUrl);
    } else imgContainer.style.display = 'none';

    loadAnswer();
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
        div.addEventListener('click', getNumber);
    }
    nomor = document.querySelectorAll('.nomor');
    nomor[0].classList.add('active');
}

function getNumber() {
    const currentNum = document.querySelectorAll('.nomor');
    currentNum.forEach((num) => {
        if (num.classList.contains('active')) {
            number = tryoutData[num.id].nomor;
        }
    });
    return number;
}

function getAnswer() {
    let userAnswer;

    document.querySelectorAll('.jawaban').forEach((e) => {
        if (e.checked === true) {
            userAnswer = e.id;
        }
    });
    return userAnswer;
}

function getTotalAnswered() {
    let totalAnswered = 0;

    for (let i = 0; i < tryoutData.length; i++) {
        if (hasilJawaban[i] !== undefined) {
            if (hasilJawaban[i].jawab !== undefined) {
                totalAnswered++;
            }
        }
    }

    return totalAnswered;
}

function saveAnswer() {
    navNum = document.querySelectorAll('.nomor');

    for (let i = 0; i < tryoutData.length; i++) {
        if (navNum[i].classList.contains('active')) {
            hasilJawaban[i] = {
                nomor: getNumber(),
                jawab: getAnswer(),
            };
            if (hasilJawaban[i].jawab !== undefined) {
                navNum[i].classList.add('answered');
            }
            continue;
        }
    }

    return hasilJawaban;
}

function showPopup() {
    const popContainer = document.createElement('section');
    const popContent = document.createElement('div');
    const textContainer = document.createElement('div');
    const popHeader = document.createElement('h4');
    const popText = document.createElement('p');

    body.appendChild(popContainer).classList.add('confirmation-bg');
    popContainer.appendChild(popContent).classList.add('confirmation-content');
    popContent.appendChild(textContainer).classList.add('text-container');
    textContainer.appendChild(popHeader).textContent = 'Apakah kamu yakin?';
    textContainer.appendChild(popText).textContent = `Kamu menjawab ${getTotalAnswered()} dari ${tryoutData.length} soal.`;
    popContent.appendChild(document.createElement('div')).classList.add('btn-container');

    const btnContainer = document.querySelector('.btn-container');
    btnContainer.appendChild(document.createElement('button')).classList.add('cancel-btn');
    btnContainer.appendChild(document.createElement('button')).classList.add('confirm-btn');

    const cancelBtn = document.querySelector('.cancel-btn');
    const confirmBtn = document.querySelector('.confirm-btn');
    cancelBtn.textContent = 'BATAL';
    confirmBtn.textContent = 'SELESAI';

    cancelBtn.addEventListener('click', () => body.removeChild(popContainer));
    confirmBtn.addEventListener('click', () => (window.location = '../tryout-start/sbmptn/index.html'));
}

// fungsi untuk menampilkan kembali jawaban user yg sebelumnya sudah dipilih
function loadAnswer() {
    for (let j = 0; j < hasilJawaban.length; j++) {
        if (hasilJawaban[j] !== undefined) {
            for (let k = 0; k < jawaban.length; k++) {
                if (hasilJawaban[j].jawab == jawaban[k].id && hasilJawaban[j].nomor == getNumber()) {
                    return (jawaban[k].checked = true);
                } else {
                    jawaban[k].checked = false;
                    continue;
                }
            }
        }
    }
}
