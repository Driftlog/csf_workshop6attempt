import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Weather } from '../models/weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  http = inject(HttpClient)
  OPEN_WEATHER_API_URL = "https://api.openweathermap.org/data/2.5/weather"
  API_KEY = "476e23fe1116f4e69d2a3e68672604e1";

  constructor() { }

  getWeather(city : string) {

  const queryParams = new HttpParams()
          .set("q", city)
          .set("appid", this.API_KEY)

  console.log(city)

    return this.http.get<Weather>(this.OPEN_WEATHER_API_URL, {params : queryParams})
  }

}
