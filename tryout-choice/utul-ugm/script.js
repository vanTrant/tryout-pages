const container_div = document.querySelector('.tryout-container');
const date_p = document.querySelector('.date');
const time_p = document.querySelector('.time');

function showTryouts() {
    for (let i = 0; i < tryouts.length; i++) {
        const title = tryouts[i].title;
        const date = tryouts[i].date;
        const time = tryouts[i].time;
        const tryout = document.createElement('div');
        tryout.classList.add('tryout-choice');
        tryout.innerHTML = `
                    <h2>${title}</h2>
                    <div>
                        <p class="date"><strong>Hari, Tanggal :</strong> ${date}</p>
                        <p class="time"><strong>Waktu :</strong> ${time}</p>
                    </div>
                    <button class='mulai-btn'><a href='../../tryout-start/utul-ugm/index.html' class='link'>Mulai Tryout</a></button>
        `;

        container_div.appendChild(tryout);
    }
}

showTryouts();
