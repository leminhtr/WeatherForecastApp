import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CurrentComponent } from './current/current.component';
import { Forecast1Component } from './forecast1/forecast1.component';
import { Forecast2Component } from './forecast2/forecast2.component';
import { Forecast3Component } from './forecast3/forecast3.component';
import { Forecast4Component } from './forecast4/forecast4.component';
import { Forecast5Component } from './forecast5/forecast5.component';
import { weatherRouting } from './weather.routing';
import { WeatherService } from './weather.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CurrentComponent,
    Forecast1Component,
    Forecast2Component,
    Forecast3Component,
    Forecast4Component,
    Forecast5Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    weatherRouting,
    ReactiveFormsModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
