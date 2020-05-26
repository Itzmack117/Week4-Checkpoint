import clockService from "../services/ClockService.js"
function drawClock() {
    let date = clockService.clockDate()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    console.log(hours, minutes);

    document.getElementById('clock').innerHTML = <h1>${hours}:${minutes}</h1>
}

export default class ClockController {
    constructor() {
        setInterval(drawClock, 30000)
    }


}