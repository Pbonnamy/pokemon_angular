import { Pokemon } from './pokemon';

export class Battle {
  poke1: Pokemon;
  poke2: Pokemon;

  constructor(poke1: Pokemon, poke2: Pokemon) {
    this.poke1 = poke1;
    this.poke2 = poke2;
  }

  delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  getPoke1() {
    return this.poke1;
  }

  getPoke2() {
    return this.poke2;
  }

  async start(): Promise<void> {
    while (this.poke1.hp > 0 && this.poke2.hp > 0) {
      this.poke1.hp -= this.poke2.atk - this.poke1.def;

      await this.delay(1000);

      this.poke2.hp -= this.poke1.atk - this.poke2.def;

      await this.delay(1000);
    }
  }
}
