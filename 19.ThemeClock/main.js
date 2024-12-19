const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')
const timeEl = document.querySelector('.time')
const dateEl = document.querySelector('.date')
const toggle = document.querySelector('.toggle')

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

toggle.addEventListener('click', (e) => {
    const html = document.querySelector('html')
    if(html.classList.contains('dark')) {
        html.classList.remove('dark')
        e.target.innerHTML = 'Dark mode'
    } else {
        html.classList.add('dark')
        e.target.innerHTML = 'Light mode'
    }
})

function setTime() {
    const time = new Date()
    const year = time.getFullYear()
    const month = time.getMonth()
    const date = time.getDate()
    const day = time.getDay()
    const hour = time.getHours()
    const hourForClock = hour % 12
    const minute = time.getMinutes()
    const second = time.getSeconds()

    rotateHand(hourEl, hourForClock * 30);
    rotateHand(minuteEl, minute * 6);
    rotateHand(secondEl, second * 6);

    let dateDisplay = ''
    if (date % 10 === 1 && date !== 11) {
        dateDisplay = 'st'
    } else if (date % 10 === 2 && date !== 12) {
        dateDisplay = 'nd'
    } else if (date % 10 === 3 && date !== 13) {
        dateDisplay = 'rd'
    } else {
        dateDisplay = 'th'
    }

    timeEl.innerHTML = `${hour < 10 ? '0' + hour : hour}:${minute < 10 ? '0' + minute : minute}:${second < 10 ? '0' + second : second}`
    dateEl.innerHTML = `${days[day]}, ${months[month]} ${date}<sup>${dateDisplay}</sup> ${year}`
}

function rotateHand(element, degrees) {
    element.style.transition = degrees === 0 ? 'none' : 'transform 0.3s ease-in';
    element.style.transform = `translate(-50%, -100%) rotate(${degrees}deg)`;
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

setTime()

setInterval(setTime, 1000)