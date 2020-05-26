export default class Quote {
    constructor(data) {
        this.text = data.body
        this.author = data.author
    }
    get Template() {
        return `<div>${this.text}</div>
    <div class="text-center">-${this.author}</div>`
    }
}