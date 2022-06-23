import { Pokemon} from "../models/pokemon";

export class BattleService {
  poke1!: Pokemon;
  poke2!: Pokemon;
  isPlaying!: boolean;
  messages!: {color: string, text: string}[];

  constructor() {}

  init(poke1: Pokemon, poke2: Pokemon) {
    this.poke1 = poke1;
    this.poke2 = poke2;
    this.isPlaying = false;
    this.messages = [];
  }

  delay(sec: number) {
    return new Promise((resolve) => setTimeout(resolve, sec * 1000));
  }

  attack(attacker: Pokemon, defender: Pokemon) {
    const dmg = attacker.atk - defender.def;
    if(attacker.playerNumber === 1) this.messages.push({color:attacker.type[0].color,text:attacker.name + " inflige " + dmg + " dégats à " + defender.name});
    if(attacker.playerNumber === 2) this.messages.push({color:attacker.type[0].color,text:attacker.name + " inflige " + dmg + " dégats à " + defender.name});
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
    if(this.poke1.hp <= 0) this.messages.push({color:"black",text:this.poke1.name + " est KO !"});
    if(this.poke2.hp <= 0) this.messages.push({color:"black",text:this.poke2.name + " est KO !"});
  }
}
