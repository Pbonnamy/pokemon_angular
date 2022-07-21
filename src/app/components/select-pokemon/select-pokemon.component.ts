import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select-pokemon',
  templateUrl: './select-pokemon.component.html',
  styleUrls: ['./select-pokemon.component.css']
})
export class SelectPokemonComponent implements OnInit {
  @Input() pokemons: {name: string, id: string, img: string}[] = [];
  @Output() select = new EventEmitter<string>();
  selected: string | null = null;

  constructor() { }

  ngOnInit(): void {
  }

  selectPokemon(id: string) {
    this.select.emit(id);
    this.selected = id;
  }
}
