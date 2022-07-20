import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  constructor(private http: HttpClient) { }

  getPokemons() {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=20`);
  }

  getPokemon(id: string) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  }


}
