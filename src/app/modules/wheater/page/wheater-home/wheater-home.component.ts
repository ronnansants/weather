//import { WeatherService } from './../../service/weather.service';
import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../service/weather.service';
import { weatherDatas } from 'src/app/models/interfaces/weather';

@Component({
  selector: 'app-wheater-home',
  templateUrl: './wheater-home.component.html',
  styleUrls: ['./wheater-home.component.scss']
})
export class WheaterHomeComponent implements OnInit {
  city = 'Uberaba';
  weatherDatas!: weatherDatas;

  constructor(private weatherService: WeatherService){}

  ngOnInit(): void {
    this.getWeatherDatas(this.city);
  }

    getWeatherDatas(cityName: string): void{
      this.weatherService.getWeatherDatas(cityName).subscribe({
        next:(response) => {
          response &&(this.weatherDatas= response);
      },
      error: (error) => console.log(error),
    });
    }
}
