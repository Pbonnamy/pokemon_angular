import { Component, OnInit } from '@angular/core';
import { BattleService } from "../../../services/battle.service";
import { Pokemon } from 'src/models/pokemon';
import {ElementType, PokemonType} from "../../../models/pokemon-type";

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css'],
  providers: [ BattleService ]
})
export class BattleComponent implements OnInit {
  pokemon1! : Pokemon ;
  pokemon2! : Pokemon ;
  date : null | number = null;
  started = false;
  btnIcon = 'play_arrow';
  constructor(public battleService:BattleService) {
  }
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
    this.battleService.init(this.pokemon1,this.pokemon2);
  }

  handleBattle(): void {
    if (!this.battleService.isPlaying) {
      this.battleService.isPlaying = true;
      if(!this.started){
        this.battleService.messages.push({color:"black", text:this.pokemon1.name + " VS " + this.pokemon2.name});
        this.started = true;
        this.date = Date.now() ;
      }
      this.battleService.start().subscribe();
      this.btnIcon = 'pause';
    } else {
      this.battleService.isPlaying = false;
      this.btnIcon = 'play_arrow';
      this.battleService.messages.push({color:"grey",text:"... Le jeu est en pause ..."});
    }
  }
}
