import clockService from "../services/ClockService.js"
function drawClock() {
    let date = clockService.clockDate()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    if (minutes < 10) {
        let minVal = `0${minutes}`
        return document.getElementById("clock").innerHTML = `<div class="clock">${hours}:${minVal}</div>`
    }
    else {
    }
    document.getElementById("clock").innerHTML = `<div class="clock">${hours}:${minutes}</div>`

}

export default class ClockController {
    constructor() {
        setInterval(drawClock, 1000)
    }


}