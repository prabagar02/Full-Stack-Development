import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { CurrentWeather } from '../current-weather';

import { Observable } from 'rxjs';


@Component({
  selector: 'app-current',
  templateUrl: './hourly.component.html',
  styleUrls: ['./hourly.component.css']
})

export class HourlyComponent implements OnInit {
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
                                            data.main.temp,
                                            data.weather[0].description);

       
         
                                  
        });
  
  
  }

}
