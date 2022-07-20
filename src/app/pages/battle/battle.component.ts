import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Pokemon } from 'src/app/models/pokemon';
import { ElementType, PokemonType } from 'src/app/models/pokemon-type';
import { BattleService } from 'src/app/services/battle/battle.service';
import { PokeApiService } from 'src/app/services/poke-api/poke-api.service';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css'],
  providers: [BattleService],
})
export class BattleComponent implements OnInit {
  pokemon1!: Pokemon;
  pokemon2!: Pokemon;
  date: null | number = null;
  started = false;
  btnIcon = 'play_arrow';
  battle: null | Subscription = null;

  constructor(public battleService: BattleService, private route: ActivatedRoute, private router: Router, private api: PokeApiService) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (!params['pok1'] || !params['pok2']) {
        this.router.navigate(['/select']);
      }else {

        this.api.getPokemon(params['pok1']).subscribe((data: any) => {
          this.pokemon1 = new Pokemon({
            name: data.name,
            atk: data.stats[1].base_stat,
            def: data.stats[2].base_stat,
            speed: data.stats[5].base_stat,
            maxHp: data.stats[0].base_stat,
            type: new PokemonType(ElementType.Fire, 'red'),
            code: data.id,
            img: data.sprites.front_default,
          });
        });

        this.api.getPokemon(params['pok2']).subscribe((data: any) => {
          this.pokemon2 = new Pokemon({
            name: data.name,
            atk: data.stats[1].base_stat,
            def: data.stats[2].base_stat,
            speed: data.stats[5].base_stat,
            maxHp: data.stats[0].base_stat,
            type: new PokemonType(ElementType.Fire, 'red'),
            code: data.id,
            img: data.sprites.back_default
          });
        });

      }
    });
  }

  handleBattle(): void {
    if (!this.battle) {
      this.battleService.init(this.pokemon1, this.pokemon2);
      if (!this.started) {
        this.battleService.messages.push({
          color: 'black',
          text: this.pokemon1.name + ' VS ' + this.pokemon2.name,
        });
        this.started = true;
        this.date = Date.now();
      }

      this.battle = this.battleService.start().subscribe();
      this.btnIcon = 'pause';
    } else {

      this.battle.unsubscribe();
      this.battle = null;

      this.btnIcon = 'play_arrow';
      this.battleService.messages.push({
        color: 'grey',
        text: '... Le jeu est en pause ...',
      });
    }
  }
}
