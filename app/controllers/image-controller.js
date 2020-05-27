import ImageService from "../services/image-service.js";
import store from "../store.js";



//TODO Create methods for constructor, and rendering the image to the page
//      (you may wish to set it as a background image)

function _drawImage() {
    let img = store.State.activeImage
    document.body.style.backgroundImage = `url('${img}')`
}

export default class ImageController {
    constructor() {
        ImageService.getimage();
        store.subscribe("activeImage", _drawImage);
    }
}
