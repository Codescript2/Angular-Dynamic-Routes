import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map, tap } from 'rxjs';
import { CountriesResp, Countries } from "../interfaces/countries.interface";
import { Country, CountryResp } from "../interfaces/country.interface";

@Injectable({
    providedIn: 'root'
})
export class CountriesService {
    url = 'https://restcountries.com/v3.1';
    
    private _http = inject(HttpClient);

    getCountries(): Observable<Countries[]> {
        return this._http.get<CountriesResp[]>(`${this.url}/all`).pipe(
            tap(console.log),
            map((countries: CountriesResp[]): Countries[] => {
              return countries.map((country: CountriesResp) => {
                return {name: country.name.common, flag: country.flags.png}
              });
            }),
        
          )
    }

    getCountryByName(param: string): Observable<Country> {
        return this._http.get<CountryResp[]>(`${this.url}/name/${param}?fullText=true`)
        .pipe(
          map(([country]): Country => {
            const name = country.name.common;
            return {
              name,
              capital: country.capital,
              region: country.region,
              population: country.population,
              flag: country.flags.png,
            }
          })
        )
    }
}