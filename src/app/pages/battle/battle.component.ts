import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { lastValueFrom, Subscription } from 'rxjs';
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
  pokemon1: Pokemon | null = null;
  pokemon2: Pokemon | null = null;
  date: null | number = null;
  started = false;
  btnIcon = 'play_arrow';
  battle: null | Subscription = null;

  constructor(public battleService: BattleService, private route: ActivatedRoute, private router: Router, private api: PokeApiService) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(async params => {
      if (!params['pok1'] || !params['pok2']) {
        this.router.navigate(['']);
      }else {

        const data1: any = await lastValueFrom(this.api.getPokemon(params['pok1'])).catch(() => {
          this.router.navigate(['']);
        });

        if (data1) {
          this.pokemon1 = new Pokemon({
            name: data1.name.charAt(0).toUpperCase() + data1.name.slice(1),
            atk: data1.stats[1].base_stat,
            def: data1.stats[2].base_stat,
            speed: data1.stats[5].base_stat,
            maxHp: data1.stats[0].base_stat,
            type: new PokemonType(data1.types[0].type.name),
            code: data1.id,
            img: data1.sprites.front_default,
          });
        }

        const data2: any = await lastValueFrom(this.api.getPokemon(params['pok2'])).catch(() => {
          this.router.navigate(['']);
        });

        if (data2) {
          this.pokemon2 = new Pokemon({
            name: data2.name.charAt(0).toUpperCase() + data2.name.slice(1),
            atk: data2.stats[1].base_stat,
            def: data2.stats[2].base_stat,
            speed: data2.stats[5].base_stat,
            maxHp: data2.stats[0].base_stat,
            type: new PokemonType(data2.types[0].type.name),
            code: data2.id,
            img: data2.sprites.back_default
          });
        }
        
        this.battleService.init(this.pokemon1!, this.pokemon2!);
      }
    });
  }

  handleBattle(): void {
    if (!this.battle) {

      if (!this.started) {

        this.battleService.messages.push({
          color: 'black',
          text: this.pokemon1!.name + ' VS ' + this.pokemon2!.name,
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
