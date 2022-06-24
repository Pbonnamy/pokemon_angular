import { interval, map, Observable, takeWhile } from 'rxjs';
import { Pokemon } from '../models/pokemon';

export class BattleService {
  poke1!: Pokemon;
  poke2!: Pokemon;
  isPlaying!: boolean;
  messages!: { color: string; text: string }[];

  constructor() {}

  init(poke1: Pokemon, poke2: Pokemon) {
    this.poke1 = poke1;
    this.poke2 = poke2;
    this.isPlaying = false;
    this.messages = [];
  }

  attack(attacker: Pokemon, defender: Pokemon) {
    const dmg = attacker.atk - defender.def;
    if (attacker.playerNumber === 1)
      this.messages.push({
        color: attacker.type[0].color,
        text: attacker.name + ' inflige ' + dmg + ' dégats à ' + defender.name,
      });
    if (attacker.playerNumber === 2)
      this.messages.push({
        color: attacker.type[0].color,
        text: attacker.name + ' inflige ' + dmg + ' dégats à ' + defender.name,
      });
    defender.hp -= dmg;
  }

  start(): Observable<void> {
    return interval(1000).pipe(
      takeWhile(() => this.poke1.hp > 0 && this.poke2.hp > 0 && this.isPlaying),
      map(() => {
        if (this.poke1.hp > 0) {
          this.attack(this.poke1, this.poke2);
        }

        if (this.poke2.hp > 0) {
          this.attack(this.poke2, this.poke1);
        }
        if(this.poke1.hp <= 0) this.messages.push({color:"black",text:this.poke1.name + " est KO !"});
        if(this.poke2.hp <= 0) this.messages.push({color:"black",text:this.poke2.name + " est KO !"});
      })
    );
  }
}
