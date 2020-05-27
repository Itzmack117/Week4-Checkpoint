export default class Weather {
  constructor(data) {
    console.log('[RAW WEATHER API DATA]', data);
    //NOTE Have you ever wanted to know the temperature measured in kelvin? 
    //      That is what this data returns! data.main.temp is the temperature in Kelvin


    //TODO You should probably convert the temperature data to either F or C
    //      check out the other data that comes back and see if there is anything you want to try

    this.city = data.name
    this.kelvin = data.main.temp
    this.celsius = Math.round(data.main.temp - 273)
    this.bestDegrees = Math.round((this.celsius * 1.8) + 32)
    this.Temp = [this.bestDegrees, this.celsius]
  }
  get TemplateC() {
    return /*html*/`<h4 class= "pointer" onclick="app.WeatherController.toggleTemp(event)"><div class="text-center"><div>${this.celsius}C</div>
    <div>${this.city}</div></div></h4>`

  }
  get TemplateF() {
    return /*html*/`<h4 class= "pointer" onclick="app.WeatherController.toggleTemp(event)"><div class="text-center"><div>${this.bestDegrees}F</div>
    <div>${this.city}</div></div></h4>`
  }
}