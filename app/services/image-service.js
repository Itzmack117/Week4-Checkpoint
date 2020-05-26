import store from "../store.js"
// @ts-ignore
const imgApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/images",
  timeout: 8000
});

//TODO create methods to retrieve data trigger the update window when it is complete
class ImageService {
  async getimage() {
    let res = await imgApi.get();
    let img = res.data.url
    store.commit("activeImage", img)
  }
}

const imageService = new ImageService();
export default imageService;
