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

  constructor(private weatherService: WeatherService) { }

  forecastForm : FormGroup;
  cityForecast: Forecast[]=[];

  units = [
    {id: 1, name: "metric"},
    {id: 2, name: "imperial"}
  ];
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

  ngOnInit() {
    this.forecastForm = new FormGroup({
      forecastCity: new FormControl('')
    })
  }

  onSubmit(){
    this.cityForecast.splice(0,this.cityForecast.length)
    this.weatherService.forecast5(this.forecastForm.value.forecastCity).subscribe(
      (data) => {
        for(let i=0; i<data.list.length; i+=1){
          const tmp = new Forecast(data.list[i].dt_txt,
            data.list[i].weather[0].icon,
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
