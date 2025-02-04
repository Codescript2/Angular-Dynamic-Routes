import { Component, inject, input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { map, switchMap } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-country',
  imports: [],
  templateUrl: './country.component.html',
  styleUrl: './country.component.scss'
})
export class CountryComponent implements OnInit {

  acRoutes = inject(ActivatedRoute);
  countriesService = inject(CountriesService);

  name = input();
  isCountry = input();

  capital = input();

  country = toSignal(this.acRoutes.params.pipe(
    map((params) => params['name']),
    switchMap((param) => this.countriesService.getCountryByName(param))
  ))

  ngOnInit(): void {
    console.log(this.name());
    console.log(this.isCountry());
    console.log(this.capital());
  }
}
