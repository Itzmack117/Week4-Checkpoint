import QuoteService from "../services/quote-service.js";
import store from "../store.js";
import Quote from "../models/Quote.js";

//TODO Create methods for constructor, and rendering the quote to the page
//      (be sure to review the HTML as an element already was put there for you)
function _drawQuote() {
    document.getElementById('quote').innerHTML = store.State.activeQuote.Template
}

function revealAuthor() {
    let q = document.getElementById('quote')

}
export default class QuoteController {
    constructor() {
        store.subscribe("activeQuote", _drawQuote);
        QuoteService.getQuote()
    }
}
