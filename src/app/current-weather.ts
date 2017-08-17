export class CurrentWeather {
  constructor(public cityName: string,
              public countryName: string,
              public tempCurrent: string,
              public icon: string,
              public weatherInfo: string,
              public tempMin: string,
              public tempMax: string,
              public pressure : string,
              public humidity : string,
              public wind_speed : string,
              public wind_dir: string,
              public clouds : string
  ) { }
}

