import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-stats',
  templateUrl: './pokemon-stats.component.html',
  styleUrls: ['./pokemon-stats.component.css']
})
export class PokemonStatsComponent implements OnInit {
  @Input() pokemon: any = {};
  @Input() position: string = "";

  ngOnInit(): void {
  }

}
