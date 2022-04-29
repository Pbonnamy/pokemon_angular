import { PokemonType } from "./pokemon-type";

export interface PokemonProps {
    name: string;
    att: number;
    def: number;
    speed: number;
    maxHp: number;
    hp: number;
    type: Array<PokemonType>;
}

export class Pokemon {
    name: string;
    att: number;
    def: number;
    speed: number;
    maxHp: number;
    hp: number;
    type: Array<PokemonType>;

    constructor (props: PokemonProps) {
        this.name = props.name;
        this.att = props.att;
        this.def = props.def;
        this.speed = props.speed;
        this.maxHp = props.maxHp;
        this.hp = props.hp;
        this.type = props.type;
    }
}