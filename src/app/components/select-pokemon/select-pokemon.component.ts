import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PokeApiService } from 'src/app/services/poke-api/poke-api.service';

@Component({
  selector: 'app-select-pokemon',
  templateUrl: './select-pokemon.component.html',
  styleUrls: ['./select-pokemon.component.css']
})
export class SelectPokemonComponent implements OnInit {
  @Input() pokemons: {name: string, id: string, img: string}[] = [];
  @Output() select = new EventEmitter<string>();
  selected: string | null = null;
  
  constructor(private api: PokeApiService) { }

  ngOnInit(): void {
  }

  selectPokemon(id: string) {
    this.select.emit(id);
    this.selected = id;
  }
}
