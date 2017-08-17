export class Forecast {
  constructor(public day: string,
              public icon: string,
              public tempMin: string,
              public tempMax: string,
              public pressure : string,
              public humidity : string,
              public wind_speed : string,
              public wind_dir: string,
              public clouds : string
  ){}
}
