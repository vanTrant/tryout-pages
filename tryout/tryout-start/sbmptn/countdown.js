setInterval(countDown, 1000);

function countDown() {
    const countDate = new Date('30 August, 2022 11:22:00').getTime();
    const now = new Date().getTime();
    const gap = countDate - now;
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Calculate the shit
    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    const hourValue = document.querySelector('.hour');
    const minuteValue = document.querySelector('.minute');
    const secondValue = document.querySelector('.second');

    hourValue.textContent = textHour;
    minuteValue.textContent = textMinute;
    secondValue.textContent = textSecond;

    if (hourValue.textContent <= 0 && minuteValue.textContent <= 0 && secondValue.textContent <= 0) {
        hourValue.textContent = 0;
        minuteValue.textContent = 0;
        secondValue.textContent = 0;
        showPopup();
    }
}

function showPopup() {
    const body = document.querySelector('body');
    const section = document.createElement('section');
    const div = document.createElement('div');
    const h2 = document.createElement('h2');
    const closeBtn = document.createElement('button');

    body.style.position = 'relative';

    section.style.background = 'rgba(0,0,0,0.2)';
    section.style.display = 'flex';
    section.style.justifyContent = 'center';
    section.style.alignItems = 'center';
    section.style.height = '100vh';
    section.style.width = '100vw';
    section.style.position = 'fixed';
    section.style.zIndex = '2';
    section.style.top = '0';

    div.style.width = '20rem';
    div.style.height = 'max-content';
    div.style.padding = '1.5rem';
    div.style.display = 'flex';
    div.style.flexDirection = 'column';
    div.style.justifyContent = 'space-evenly';
    div.style.alignItems = 'center';

    h2.textContent = 'Waktu habis';
    h2.style.color = '#ffffff';
    h2.style.padding = '1rem';

    closeBtn.classList.add('submit-btn');
    closeBtn.textContent = 'TUTUP';
    closeBtn.style.background = 'rgb(255, 0, 0)';
    closeBtn.style.color = '#ffffff';

    body.appendChild(section);
    section.appendChild(div);
    div.appendChild(h2);
    div.appendChild(closeBtn);

    closeBtn.addEventListener('click', () => (window.location = '../../index.html'));
}
