import { Injectable } from '@angular/core';
import {CurrentWeather} from './current-weather';
import {Http, Response} from "@angular/http";
import 'rxjs/Rx';
import {Forecast} from './forecast';


@Injectable()
export class WeatherService {
  current: CurrentWeather = new CurrentWeather('', '', '', '', '','' , '','' ,'' ,'','','')
  constructor(private http:Http) { }

  weatherNow() {
    return this.current;
  }

  localWeather(lat:string, long: string){
    return this.http.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=3c1cd1d8650e75bc7ba8fdb48d06e445&units=imperial`).map((response:Response) => response.json())
  }

  cityWeather(city:string){
    return this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3c1cd1d8650e75bc7ba8fdb48d06e445&units=imperial`).map((response:Response) => response.json());
  }

  forecast5(city:string){
    return this.http.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=3c1cd1d8650e75bc7ba8fdb48d06e445&units=imperial`).map((response:Response) => response.json());
  }

}
