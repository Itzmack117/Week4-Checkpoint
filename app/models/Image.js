export default class Image {
    constructor(data) {
        this.source = data.copyright
        this.imgUrl = data.url
        this.site = data.site
    }
    get Template() {
        return/*html*/`<div style="background-image: url('${this.imgUrl}')" >
    </div>`
    }
}
