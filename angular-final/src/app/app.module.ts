import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpModule } from '@angular/http';
import { HeaderComponent } from './header/header.component';
import { CurrentComponent } from './current/current.component';
import { WeatherService } from './weather.service';
import { AboutUsComponent } from './about-us/about-us.component';
import { routing } from './weather.routing';
import { ServicesComponent } from './services/services.component';
import { CustomersComponent } from './customers/customers.component';
import { HourlyComponent } from './hourly/hourly.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CurrentComponent,
    AboutUsComponent,
    ServicesComponent,
    CustomersComponent,
    HourlyComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule, 
    routing
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
