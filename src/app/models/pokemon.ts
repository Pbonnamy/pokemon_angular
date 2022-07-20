import { PokemonType } from './pokemon-type';

export interface PokemonProps {
  code: string;
  name: string;
  atk: number;
  def: number;
  speed: number;
  maxHp: number;
  img: string;
  type: PokemonType;
}

export class Pokemon {
  code: string;
  name: string;
  atk: number;
  def: number;
  speed: number;
  maxHp: number;
  hp: number;
  img: string;
  type: PokemonType;

  constructor(props: PokemonProps) {
    this.code = props.code;
    this.name = props.name;
    this.atk = props.atk;
    this.def = props.def;
    this.speed = props.speed;
    this.maxHp = props.maxHp;
    this.hp = props.maxHp;
    this.img = props.img;
    this.type = props.type;
  }
}
