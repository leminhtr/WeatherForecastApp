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
