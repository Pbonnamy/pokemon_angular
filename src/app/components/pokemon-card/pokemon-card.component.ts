import { Component, Input, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/services/poke-api/poke-api.service';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit {
  @Input() pokemon!: {name: string, id: string, img: string};
  @Input() selected: boolean = false;

  constructor(private api: PokeApiService) { }

  ngOnInit(): void {
  }
}
