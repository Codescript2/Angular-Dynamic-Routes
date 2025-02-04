import { ResolveFn, Routes } from '@angular/router';
import { CountryListComponent } from './components/country-list/country-list.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AboutUsFirstComponent } from './components/about-us-first/about-us-first.component';
import { AboutUsSecondComponent } from './components/about-us-second/about-us-second.component';
import { CountryComponent } from './components/country/country.component';

const getCountryName: ResolveFn<string> = (route, state) => {
    console.log({route, state});
    return route.params['name'];
}

export const routes: Routes = [
    {path: 'country-list', component: CountryListComponent, title: 'Country List'},
    {
        path: 'about-us',
        component: AboutUsComponent,
        title: 'About us',
        children: [
            {path: 'first', component: AboutUsFirstComponent, title: 'First'},
            {path: 'second', component: AboutUsSecondComponent, title: 'Second'},
            // {path: '', pathMatch: 'full', redirectTo: 'first'},
        ]
    },
    {
        path: 'country-list/:name',
        component: CountryComponent,
        title: getCountryName,
        data: {
            isCountry: true
        }
    },
    {path: '', pathMatch: 'full', redirectTo: 'about-us'},
    {path: '**', redirectTo: 'country-list'},
];

