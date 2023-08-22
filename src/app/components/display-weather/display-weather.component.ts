import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Weather } from 'src/app/models/weather';
import { WeatherService } from 'src/app/service/weather.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-display-weather',
  templateUrl: './display-weather.component.html',
  styleUrls: ['./display-weather.component.css']
})
export class DisplayWeatherComponent implements OnInit{

  activatedRoute  = inject(ActivatedRoute)
  weatherSvc = inject(WeatherService)
  city!: string;
  queryWeather !: Weather
  location = inject(Location)

  ngOnInit() {
     const city = this.activatedRoute.snapshot.queryParams['q']
      this.weatherSvc.getWeather(city).subscribe((x : any) => {
        this.queryWeather = new Weather(x.weather[0].id, x.weather[0].main, x.weather[0].description, x.weather[0].icon)
  })}

  goBack() {
    this.location.back()
  }

}
