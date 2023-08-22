import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DisplayWeatherComponent } from './components/display-weather/display-weather.component';

const routes : Routes = [
   {path: '', component: HomeComponent},
   {path: 'displayWeather', component: DisplayWeatherComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DisplayWeatherComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
