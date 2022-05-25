import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/models/pokemon';

@Component({
  selector: 'app-pokemon-stats',
  templateUrl: './pokemon-stats.component.html',
  styleUrls: ['./pokemon-stats.component.css'],
})
export class PokemonStatsComponent implements OnInit {
  @Input() pokemon!: Pokemon;

  ngOnInit(): void {}

  hpBarColor() {
    const percent = (this.pokemon.hp * 100) / this.pokemon.maxHp;

    if (percent > 75) {
      return 'green';
    } else if (percent > 50) {
      return 'orange';
    } else if (percent > 25) {
      return 'yellow';
    } else {
      return 'red';
    }
  }
}
