import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { CurrentWeather } from '../current-weather';

import { Observable } from 'rxjs';


@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.css']
})

export class CurrentComponent implements OnInit {
  myWeather:CurrentWeather; 
  location
  constructor(private ws:WeatherService) { }

   ngOnInit() {
    this.myWeather = this.ws.weatherNow();
    //this.location = pos.coords;
      //const lat = this.location.latitude;
      //const lon = this.location.longitude;
      const lat = "43.1932";
      const lat2 = "43.9";
      const lon = "-78.85"; 
      
      this.ws.localWeather(lat2, lon).subscribe(
        (data) => {
        console.log(data);
        this.myWeather = new CurrentWeather(data.weather[0].icon, 
                                            data.name,
                                            data.description,
                                            data.main.temp);
         
                                  
        });
  
  
  }

}
