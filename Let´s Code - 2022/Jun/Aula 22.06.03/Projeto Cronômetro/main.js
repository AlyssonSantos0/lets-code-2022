const btn_start = document.querySelector('#btn_start')
const btn_pause = document.querySelector('#btn_pause')
const btn_reset = document.querySelector('#btn_reset')

let lbl_hour = document.querySelector('#seconds')
let lbl_minute = document.querySelector('#cents')
let lbl_seconds = document.querySelector('#seconds')
let lbl_cents = document.querySelector('#cents')
let intervalo
let hour = 0
let minute = 0
let seconds = 0
let cents = 0

console.log(btn_start);
console.log(btn_pause);
console.log(btn_reset);


btn_start.addEventListener('click', (event)=>{
    event.preventDefault();
    intervalo = setInterval(start_cronometro, 10)
} )


function start_cronometro() {
    if (cents <= 9) {
        lbl_cents.textContent = "0" + cents++
    }else if (cents > 9 && cents < 99) {
        lbl_cents.textContent = cents++
    }
    if (cents > 99) {
        increment_segundo();
        cents = 0
    }
    if (seconds > 59) {
        increment_minuto();
        seconds = 0
    }
    if (minute > 59) {
        increment_hour();
        minute = 0
    }
}

function increment_segundo() {
    seconds++
    if (seconds <= 9) {
        lbl_seconds.textContent = "0" + seconds
    }else if (seconds > 9 && seconds < 59) {
        lbl_seconds.textContent = seconds
    }
}

function increment_minuto() {
    minute++
    if (minute <= 9) {
        lbl_minute.textContent = "0" + minute
    }else if (minute > 9 && minute < 59) {
        lbl_minute.textContent = minute
    }
}

function increment_horas() {
    hour++
    if (hour <= 9) {
        lbl_hour.textContent = "0" + hour
    }else if (hour > 9 && hour < 59) {
        lbl_hour.textContent = hour
    }
}

btn_pause.addEventListener('click', (event)=>{
    event.preventDefault();
    clearInterval(intervalo);
} )

btn_reset.addEventListener('click', (event)=>{
    event.preventDefault();
    clearInterval(intervalo);
    cents = 0
    seconds = 0
    minute = 0
    hour = 0

    lbl_cents = "00"
    lbl_seconds = "00"
    lbl_minute = "00"
    lbl_hour = "00"
} )