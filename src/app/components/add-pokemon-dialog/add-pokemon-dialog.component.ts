import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { PokemonType } from 'src/app/models/pokemon-type';

@Component({
  selector: 'app-add-pokemon-dialog',
  templateUrl: './add-pokemon-dialog.component.html',
  styleUrls: ['./add-pokemon-dialog.component.css']
})
export class AddPokemonDialogComponent implements OnInit {
  types: string[] = ['normal', 'fire', 'water', 'electric', 'grass', 'ice', 'fighting', 'poison', 'ground', 'flying', 'psychic', 'bug', 'rock', 'ghost', 'dragon', 'dark', 'steel', 'fairy'];
  @Output() updtPokemon = new EventEmitter<{name: string}>();
  pokemon: { name: string | null, att: number | null, def:number | null, hp: number | null, type: PokemonType | null} = {name: null, att: null, def: null, hp: null, type: null};

  constructor(public ref: MatDialogRef<AddPokemonDialogComponent>) { }

  ngOnInit(): void {
  }

  save() {
    if (this.pokemon.name) {
      this.updtPokemon.emit({name: this.pokemon.name});
    }
    this.ref.close();
  }
}
