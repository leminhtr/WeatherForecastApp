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
  myWeather: CurrentWeather;
  location
  constructor(private ws:WeatherService) { }

  ngOnInit() {
    this.myWeather=this.ws.weatherNow();
    navigator.geolocation.getCurrentPosition(((pos) => {
      this.location= pos.coords;
      const lat = this.location.latitude;
      const long = this.location.longitude;
      this.ws.localWeather(lat, long).subscribe(
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
    this.ws.cityWeather(weatherForm.value.city).subscribe(
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
