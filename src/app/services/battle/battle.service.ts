import { Injectable } from '@angular/core';
import { interval, map, Observable, takeWhile } from 'rxjs';
import { Pokemon } from 'src/app/models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class BattleService {
  poke1!: Pokemon;
  poke2!: Pokemon;
  messages!: { color: string; text: string, dmg?: number | null  }[];
  round!: number;

  constructor() {}

  init(poke1: Pokemon, poke2: Pokemon) {
    this.poke1 = poke1;
    this.poke2 = poke2;
    this.messages = [];
    this.round = 0;
  }

  attack(attacker: Pokemon, defender: Pokemon) {
    let damage: number = attacker.atk - defender.def;
    damage < 0 ? damage = 0 : null;
    damage += Math.floor(Math.random() * ((attacker.atk)*25/100));

    this.messages.push({
      color: attacker.type.color,
      text: attacker.name + ' inflige ' + "/" + damage + "/" + ' dégats à ' + defender.name,
      dmg: damage
    });
    defender.hp -= damage;
  }

  start(): Observable<void> {
    return interval(1000).pipe(
      takeWhile(() => this.poke1.hp > 0 && this.poke2.hp > 0),
      map(() => {
        this.round++;

        if (this.poke1.hp > 0 && this.round % 2 === 0) {
          this.attack(this.poke1, this.poke2);
        }

        if (this.poke2.hp > 0 && this.round % 2 !== 0) {
          this.attack(this.poke2, this.poke1);
        }

        if (this.poke1.hp <= 0)
          this.messages.push({
            color: 'black',
            text: this.poke1.name + ' est KO !',
          });

        if (this.poke2.hp <= 0)
          this.messages.push({
            color: 'black',
            text: this.poke2.name + ' est KO !',
          });
      })
    );
  }
}
