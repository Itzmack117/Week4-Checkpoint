import WeatherService from "../services/weather-service.js";
import store from "../store.js";

//NOTE The weather service and controller are mostly done,
//		you may wish to check out the model and include some additional data.

//TODO Complete rendering data to the screen

function drawWeather() {
  let F = store.State.weather.TemplateF
  console.log("THE WEATHER MAN SAYS:", store.State.weather);
  document.getElementById("weather").innerHTML = F
  store.commit('activeTemp', F)
}
export default class WeatherController {
  constructor() {
    store.subscribe("weather", drawWeather);
    WeatherService.getWeather();

  }
  toggleTemp(event) {
    event.preventDefault()
    let aTemp = store.State.activeTemp
    if (aTemp == store.State.weather.TemplateF) {
      document.getElementById("weather").innerHTML = store.State.weather.TemplateC
      store.commit('activeTemp', store.State.weather.TemplateC)
    } else if (aTemp == store.State.weather.TemplateC) {
      document.getElementById("weather").innerHTML = store.State.weather.TemplateF
      store.commit('activeTemp', store.State.weather.TemplateF)
    }
  }
}