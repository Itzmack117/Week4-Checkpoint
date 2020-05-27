import WeatherController from "./controllers/weather-controller.js";
import TodoController from "./controllers/todo-controller.js";
import ImageController from "./controllers/image-controller.js";
import QuoteController from './controllers/quote-controller.js';
import ClockController from "./controllers/Clock-Controller.js"
//TODO Dont forget to register all your controllers
class App {
  constructor() {
    this.ImageController = new ImageController();
    this.WeatherController = new WeatherController();
    this.QuoteController = new QuoteController();
    this.TodoController = new TodoController();
    this.ClockController = new ClockController();
  }
}
window["app"] = new App();
