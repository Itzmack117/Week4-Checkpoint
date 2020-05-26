import ImageService from "../services/image-service.js";
import store from "../store.js";



//TODO Create methods for constructor, and rendering the image to the page
//      (you may wish to set it as a background image)

function _drawImage() {
    let img = store.State.activeImage
    console.log(img)
    // let template = `<body style="background-image: url(${img});")>`
    // document.getElementById("bg-image").innerHTML = template
}

export default class ImageController {
    constructor() {
        ImageService.getimage();
        store.subscribe("activeImage", _drawImage);
    }
}
