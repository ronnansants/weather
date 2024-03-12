import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = '6f1d0598d9ebb5e0c4c90945c034552a'; // OpenWeatherMap API key

  constructor(private angularHttp: HttpClient) {}

    getWeatherDatas(cityName: string): Observable<any>{
      return this.angularHttp.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&node=json&appid=${this.apiKey}`, {}
      )
    }
}
