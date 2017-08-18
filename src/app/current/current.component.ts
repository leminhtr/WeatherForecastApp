// Current weather component
// Get weather info on machine position or searched city

import { Component, OnInit } from '@angular/core';
import {WeatherService} from "../weather.service";
import { CurrentWeather } from '../current-weather';
import {NgForm} from '@angular/forms';
import 'rxjs/Rx';

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.css']
})
export class CurrentComponent implements OnInit {
  myWeather: CurrentWeather;  // custom class : current-weather.ts
  location;

  // Default unit is standard, until other chosen
  units = [
    {name: "metric"},
    {name: "imperial"}
  ];
  // Default language is English, choice not required
  language = [
    {id: 'en', name: "English"},
    {id: 'fr', name: "French"},
    {id: 'es', name: "Spanish"},
    {id: 'ar', name: "Arabic"},
    {id: 'bg', name: "Bulgarian"},
    {id: 'ca', name: "Catalan"},
    {id: 'cz', name: "Czech"},
    {id: 'de', name: "German"},
    {id: 'el', name: "Greek"},
    {id: 'fa', name: "Persian"},
    {id: 'fi', name: "Finish"},
    {id: 'gl', name: "Galician"},
    {id: 'hr', name: "Croatian"},
    {id: 'hu', name: "Hungarian"},
    {id: 'it', name: "Italian"},
    {id: 'ja', name: "Japanese"},
    {id: 'kr', name: "Korean"},
    {id: 'la', name: "Latvian"},
    {id: 'lt', name: "Lithuanian"},
    {id: 'mk', name: "Macedonian"},
    {id: 'nl', name: "Dutch"},
    {id: 'pl', name: "Polish"},
    {id: 'pt', name: "Portuguese"},
    {id: 'ro', name: "Romanian"},
    {id: 'ru', name: "Russian"},
    {id: 'se', name: "Swedish"},
    {id: 'sk', name: "Slovak"},
    {id: 'sl', name: "Slovenian"},
    {id: 'tr', name: "Turkish"},
    {id: 'ua', name: "Ukrainian"},
    {id: 'vi', name: "Vietnamese"},
    {id: 'zh_cn', name: "Chinese Simplified"},
    {id: 'zh_tw', name: "Chinese Traditional"}
  ];

  constructor(private ws:WeatherService) { }

  // get Weather info on machine geoloc
  ngOnInit() {
    this.myWeather=this.ws.weatherNow();  // return dummy data from weather service
    navigator.geolocation.getCurrentPosition(((pos) => {  // get machine latitude and longitude
      this.location= pos.coords;
      const lat = this.location.latitude;
      const long = this.location.longitude;
      this.ws.localWeather(lat, long).subscribe(  // openweather api call
        (data) =>{
          this.myWeather = new CurrentWeather(data.name,
                                              data.sys.country,
                                              data.main.temp,
                                              data.weather[0].icon,
                                              data.weather[0].description,
                                              data.main.temp_min,
                                              data.main.temp_max,
                                              data.main.pressure,
                                              data.main.humidity,
                                              data.wind.speed,
                                              data.wind.deg,
                                              data.clouds.all
          )
        }
      )

    }))



  }

  onSubmit(weatherForm:NgForm)
  {
    // API call from weather Form
    this.ws.cityWeather(weatherForm.value.city, weatherForm.value.unit, weatherForm.value.lang).subscribe(
      (data) => {
        this.myWeather = new CurrentWeather(data.name,
          data.sys.country,
          data.main.temp,
          data.weather[0].icon,
          data.weather[0].description,
          data.main.temp_min,
          data.main.temp_max,
          data.main.pressure,
          data.main.humidity,
          data.wind.speed,
          data.wind.deg,
          data.clouds.all
        );
      }
    )
  }
}
