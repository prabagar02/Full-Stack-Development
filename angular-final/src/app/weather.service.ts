import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'
import { map } from "rxjs/operators";
import { CurrentWeather } from './current-weather';

@Injectable()
export class WeatherService {
  current:CurrentWeather = new CurrentWeather("http://clipart-library.com/images/8czKnAq5i.png", 'Paris', '', '')
  constructor(private http:Http) { }

  weatherNow(){
    return this.current;
  }
  localWeather(lat: string, lon: string){
  return this.http.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=9531df35b10139481d59c261bea2ca0f&units=metric`).pipe(map((response:Response) => response.json()));
  }
}

