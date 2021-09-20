const tpsContainer = document.querySelector('.tps-container .content-container');
const tkaContainer = document.querySelector('.tka-container .content-container');
const containerTitle = document.querySelector('.title');

containerTitle.textContent = tryoutTitle;

showTps();
showTka();

function showTps() {
    for (let i = 0; i < tps.length; i++) {
        const getJudul = tps[i].judul;
        const getSoal = tps[i].soal;
        const getWaktu = tps[i].menit;

        const div = document.createElement('div');
        div.classList.add('content');
        div.innerHTML = `
            <div>
                <h3 class="tps-title content-title">${getJudul}</h3>
                <p class="soal-text"><span class="tps-soal">${getSoal}</span> Soal</p>
                <p class="waktu-text"><span class="tps-waktu">${getWaktu}</span> Menit</p>
            </div>
            <a href="../../tryout-interface/index.html" class="link">Kerjakan</a>
        `;
        tpsContainer.appendChild(div);
    }
}

function showTka() {
    for (let i = 0; i < tka.length; i++) {
        const getJudul = tka[i].judul;
        const getSoal = tka[i].soal;
        const getWaktu = tka[i].menit;

        const div = document.createElement('div');
        div.classList.add('content');
        div.innerHTML = `
            <div>
                <h3 class="tka-title content-title">${getJudul}</h3>
                <p class="soal-text"><span class="tka-soal">${getSoal}</span> Soal</p>
                <p class="waktu-text"><span class="tka-waktu">${getWaktu}</span> Menit</p>
            </div>
            <a href="../../tryout-interface/index.html" class="link">Kerjakan</a>
        `;
        tkaContainer.appendChild(div);
    }
}
