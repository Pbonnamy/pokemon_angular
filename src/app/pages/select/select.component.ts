import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddPokemonDialogComponent } from 'src/app/components/add-pokemon-dialog/add-pokemon-dialog.component';
import { PokeApiService } from 'src/app/services/poke-api/poke-api.service';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
  pok1: string | null = null;
  pok2: string | null = null;
  pokemons: {name: string, id: string, img: string}[] = [];
  offset: number = 0;
  limit: number = 15;

  constructor(private router: Router, private api: PokeApiService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getPokemons();
  }

  fight() {
    this.router.navigate(['/battle'], {queryParams : {'pok1': this.pok1, 'pok2': this.pok2}});
  }

  getPokemons() {
    this.api.getPokemons(this.offset, this.limit).subscribe((data: any) => {
      data.results.forEach((pokemon: any) => {
        const id = pokemon.url.split('/')[6];
        this.api.getPokemon(id).subscribe((pokemonData: any) => {
          this.pokemons.push({
            name: pokemonData.name,
            id: pokemonData.id,
            img: pokemonData.sprites.front_default,
          });
        });
      });
    });
  }

  load() {
    this.offset += this.limit;
    this.getPokemons();
  }

  add() {
    this.dialog.open(AddPokemonDialogComponent, {
      width: '600px',
      autoFocus: false,
      disableClose: true,
    });
  }
}
