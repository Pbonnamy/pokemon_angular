import { Component, OnInit } from '@angular/core';
import { Battle } from 'src/models/battle';
import { Pokemon } from 'src/models/pokemon';
import {ElementType, PokemonType} from "../../../models/pokemon-type";

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css'],
})
export class BattleComponent implements OnInit {
  pokemon1! : Pokemon ;
  pokemon2! : Pokemon ;
  btnIcon! : string;
  started! : boolean ;
  battle! : Battle ;
  ngOnInit() : void {
    this.pokemon1 = new Pokemon({
      name: 'Dracaufeu',
      atk: 50,
      def: 30,
      speed: 40,
      maxHp: 300,
      type: [new PokemonType(ElementType.Fire,"red")],
      code: '006',
      playerNumber: 1,
    });

    this.pokemon2 = new Pokemon({
      name: 'Tortank',
      atk: 75,
      def: 25,
      speed: 15,
      maxHp: 200,
      type: [new PokemonType(ElementType.Water,"blue")],
      code: '009',
      playerNumber: 2,
    });
    this.btnIcon = 'play_arrow';
    this.started = false;
    this.battle = new Battle(this.pokemon1, this.pokemon2);
  }

  handleBattle(): void {
    if (!this.battle.isPlaying) {
      this.battle.isPlaying = true;
      if(!this.started){
        this.battle.messages.push({color:"black", text:this.pokemon1.name + " VS " + this.pokemon2.name});
        this.started = true;
      }
      this.battle.start();
      this.btnIcon = 'pause';
    } else {
      this.battle.isPlaying = false;
      this.btnIcon = 'play_arrow';
      this.battle.messages.push({color:"grey",text:"... The game is paused ..."});
    }
  }
}
