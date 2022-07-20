import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/services/poke-api/poke-api.service';

@Component({
  selector: 'app-select-pokemon',
  templateUrl: './select-pokemon.component.html',
  styleUrls: ['./select-pokemon.component.css']
})
export class SelectPokemonComponent implements OnInit {
  pokemons: {name: string, id: number, img: string}[] = [];
  
  constructor(private api: PokeApiService) { }

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons() {
    this.api.getPokemons().subscribe((data: any) => {
      data.results.forEach((pokemon: any) => {
        const id = pokemon.url.split('/')[6];
        this.api.getPokemon(id).subscribe((pokemonData: any) => {
          this.pokemons.push({
            name: pokemonData.name,
            id: pokemonData.id,
            img: pokemonData.sprites.front_default,
          })
        });
      });
    });
  }
}
