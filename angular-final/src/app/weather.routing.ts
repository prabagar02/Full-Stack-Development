import { Routes, RouterModule } from '@angular/router';
import { CurrentComponent } from './current/current.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ModuleWithProviders } from '@angular/core';
import { ServicesComponent } from './services/services.component';
import { CustomersComponent } from './customers/customers.component';
import { HourlyComponent } from './hourly/hourly.component';

const Weather_ROUTER: Routes = [
    {path: '', component: CurrentComponent},
    {path: 'about-us', component: AboutUsComponent},
    {path: 'services', component: ServicesComponent},
    {path: 'customers', component: CustomersComponent},
    {path: 'hourly', component: HourlyComponent}
]

export const routing: ModuleWithProviders = RouterModule.forRoot(Weather_ROUTER)
