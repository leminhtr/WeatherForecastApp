// Custom class for the forecast weather
// Define which weather info should be printed on the forecast weather page

export class Forecast {
  constructor(public day: string,
              public icon: string,
              public weatherInfo: string,
              public tempMin: string,
              public tempMax: string,
              public pressure : string,
              public humidity : string,
              public wind_speed : string,
              public wind_dir: string,
              public clouds : string
  ){}
}
