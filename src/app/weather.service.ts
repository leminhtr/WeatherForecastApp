import { Injectable } from '@angular/core';
import {CurrentWeather} from './current-weather';
import {Http, Response} from "@angular/http";
import 'rxjs/Rx';


@Injectable()
export class WeatherService {
  current: CurrentWeather = new CurrentWeather('', '', '', '', '','' , '','' ,'' ,'','','');
  constructor(private http:Http) { }

  weatherNow() {
    return this.current;
  }

  // get weather info from coordinates using open weather map API
  localWeather(lat:string, long: string){
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=3c1cd1d8650e75bc7ba8fdb48d06e445&units=imperial`).map((response:Response) => response.json())
  } // return JSON


  // get current weather info from city name
  cityWeather(city:string, unit:string, lang:string){
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3c1cd1d8650e75bc7ba8fdb48d06e445&units=${unit}&lang=${lang}`).map((response:Response) => response.json());
  } // return JSON

  // get weather forecast info from city name
  forecast5(city:string, unit: string, lang: string){
    return this.http.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=3c1cd1d8650e75bc7ba8fdb48d06e445&units=${unit}&lang=${lang}`).map((response:Response) => response.json());
  } // return JSON

}
