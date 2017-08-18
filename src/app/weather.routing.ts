// Routing for Current Weather page and Forecast Page

import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders} from '@angular/core';


import { CurrentComponent } from './current/current.component';
import {Forecast5Component} from './forecast5/forecast5.component';

const WEATHER_ROUTER: Routes = [
  {path: '', component: CurrentComponent}, // default address -> /!\ Must match [routerLink]="['path']" in header html
  {path: 'forecast5', component: Forecast5Component}  // http://.../forecast5
]

export const weatherRouting: ModuleWithProviders = RouterModule.forRoot(WEATHER_ROUTER)
