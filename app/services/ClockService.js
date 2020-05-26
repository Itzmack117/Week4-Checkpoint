
class ClockService {
    constructor() {
        this.clockDate()
    }
    clockDate() {
        let date = new Date
        return date
    }
}

const clockService = new ClockService
export default clockService