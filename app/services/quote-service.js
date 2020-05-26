import store from "../store.js";
import Quote from "../models/Quote.js"

// @ts-ignore
const _quoteApi = axios.create({
  baseURL: "http://bcw-sandbox.herokuapp.com/api/quotes",
  timeout: 3000
});

//TODO create methods to retrieve data trigger the update window when it is complete
class QuoteService {
  async getQuote() {
    console.log("Getting Quote");
    let res = await _quoteApi.get();
    store.commit("activeQuote", new Quote(res.data.quote));
  }

}

const quoteService = new QuoteService();
export default quoteService;
