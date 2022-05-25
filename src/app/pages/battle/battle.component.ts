import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css'],
})
export class BattleComponent implements OnInit {
  pokemons = [
    {
      img: '006',
      pv: 250,
      currentPv: 125,
      name: 'Dracaufeu',
    },
    {
      img: '009',
      pv: 100,
      currentPv: 25,
      name: 'Tortank',
    },
  ];

  ngOnInit(): void {}
}
