export default class Quote {
    constructor(data) {
        this.text = data.body
        this.author = data.author
    }
    get Template() {
        return `<div class="quote">${this.text}</div>
    <div class="text-center author hide">-${this.author}</div>`
    }
}