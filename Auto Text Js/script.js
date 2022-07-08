const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')
const text = "Mohammad Dayarneh  ~.~ "
let idx = 1
let speed = 300 / speedEl.value

writeText()

function writeText() {
    textEl.innerText = text.slice(0, idx)

    idx++

    if(idx > text.length) {
       return
    }

    setTimeout(writeText, speed)
}


speedEl.addEventListener('input', (e) => speed = 100 / e.target.value)