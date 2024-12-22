const stringEl = document.getElementById('string')
const speedEl = document.getElementById('speed')
const text = document.getElementById('text')

let idx = 1
let speed = 300 / speedEl.value

writeText()

function writeText() {
    stringEl.innerText = text.value.slice(0, idx)

    idx++

    if (idx > text.value.length) {
        idx = 1
    }

    setTimeout(writeText, speed)
}

speedEl.addEventListener('input', (e) => speed = 300 / e.target.value)