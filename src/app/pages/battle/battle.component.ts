import { Component, OnInit } from '@angular/core';
import { Battle } from 'src/models/battle';
import { Pokemon } from 'src/models/pokemon';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css'],
})
export class BattleComponent implements OnInit {
  pokemon1 = new Pokemon({
    name: 'Dracaufeu',
    atk: 50,
    def: 30,
    speed: 40,
    maxHp: 300,
    type: [],
    code: '006',
  });

  pokemon2 = new Pokemon({
    name: 'Tortank',
    atk: 75,
    def: 25,
    speed: 15,
    maxHp: 200,
    type: [],
    code: '009',
  });

  btnText = 'START';
  btnIcon = 'play_arrow';
  started = false;
  battle = new Battle(this.pokemon1, this.pokemon2);

  ngOnInit(): void {}

  handleBattle(): void {
    if (!this.battle.isPlaying) {
      this.battle.isPlaying = true;
      this.battle.start();
      this.btnText = 'PAUSE';
      this.btnIcon = 'pause';
    } else {
      this.battle.isPlaying = false;
      this.btnText = 'RESUME';
      this.btnIcon = 'play_arrow';
    }
  }
}
