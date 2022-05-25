import { Pokemon } from './pokemon';

export class Battle {
  poke1: Pokemon;
  poke2: Pokemon;
  isPlaying: boolean;
  messages: string[];

  constructor(poke1: Pokemon, poke2: Pokemon) {
    this.poke1 = poke1;
    this.poke2 = poke2;
    this.isPlaying = false;
    this.messages = [];
  }

  delay(sec: number) {
    return new Promise((resolve) => setTimeout(resolve, sec * 1000));
  }

  getPoke1() {
    return this.poke1;
  }

  getPoke2() {
    return this.poke2;
  }

  attack(attacker: Pokemon, defender: Pokemon) {
    const dmg = attacker.atk - defender.def;
    this.messages.push(attacker.name + " inflige " + dmg + " à " + defender.name);
    defender.hp -= dmg;
  }

  async start(): Promise<void> {
    while (this.poke1.hp > 0 && this.poke2.hp > 0 && this.isPlaying) {
      if (this.poke1.hp > 0) {
        this.attack(this.poke1, this.poke2);
        await this.delay(1);
      }

      if (this.poke2.hp > 0) {
        this.attack(this.poke2, this.poke1);
        await this.delay(1);
      }
    }
  }
}
