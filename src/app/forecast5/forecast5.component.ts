import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import 'rxjs/Rx';

import {Forecast} from '../forecast';
import {WeatherService} from "../weather.service";

@Component({
  selector: 'app-forecast5',
  templateUrl: './forecast5.component.html',
  styleUrls: ['./forecast5.component.css']
})
export class Forecast5Component implements OnInit {

  // Default unit is standard, until other chosen
  units = [
    {name: "metric"},
    {name: "imperial"}
  ];
    // Default unit is English, choice not required
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
  day = [
    {dayNumber : 1},
    {dayNumber : 2},
    {dayNumber : 3},
    {dayNumber : 4},
    {dayNumber : 5}
    ];

  constructor(private weatherService: WeatherService) { }

  forecastForm : FormGroup;
  // array of Forecast class
  cityForecast: Forecast[]=[];

  ngOnInit() {
    this.forecastForm = new FormGroup({
      forecastCity: new FormControl(''),
      forecastUnit: new FormControl(''),
      forecastLang: new FormControl(''),
      forecastDayNumber: new FormControl('')
    })
  }

  onSubmit(){
    // reset html table for multiple query
    this.cityForecast.splice(0,this.cityForecast.length);

    // API call from weather Form
    this.weatherService.forecast5(this.forecastForm.value.forecastCity, this.forecastForm.value.forecastUnit, this.forecastForm.value.forecastLang).subscribe(
      (data) => {
        for(let i=0; i<this.forecastForm.value.forecastDayNumber*8; i+=1){
          const tmp = new Forecast(data.list[i].dt_txt,
            data.list[i].weather[0].icon,
            data.list[i].weather[0].description,
            data.list[i].main.temp_min,
            data.list[i].main.temp_max,
            data.list[i].main.pressure,
            data.list[i].main.humidity,
            data.list[i].wind.speed,
            data.list[i].wind.deg,
            data.list[i].clouds.all)
          this.cityForecast.push(tmp);
        }
      }
    );

  }

}
