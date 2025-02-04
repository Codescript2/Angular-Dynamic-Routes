import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { CountriesService } from '../../services/countries.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-country-list',
  imports: [],
  templateUrl: './country-list.component.html',
  styleUrl: './country-list.component.scss'
})
export class CountryListComponent {

  countriesService = inject(CountriesService);

  router = inject(Router);

  countries = toSignal(this.countriesService.getCountries());

  goTo(name: string) {
    console.log(name);
    this.router.navigateByUrl(`country-list/${name}`);
  }
}
