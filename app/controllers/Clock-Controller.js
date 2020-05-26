import clockService from "../services/ClockService.js"
function drawClock() {
    let date = clockService.clockDate()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    console.log(hours, minutes);
    let template = <h1>${hours}:${minutes}</h1>
    document.getElementById("clock").innerHTML = template

}

export default class ClockController {
    constructor() {
        setInterval(drawClock, 60000)
    }


}