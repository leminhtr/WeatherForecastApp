import { WeatherForecastAppPage } from './app.po';

describe('weather-forecast-app App', function() {
  let page: WeatherForecastAppPage;

  beforeEach(() => {
    page = new WeatherForecastAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
