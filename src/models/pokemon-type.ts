export enum ElementType{
  Fire,
  Water,
  Grass
}

export class PokemonType {
  enumType:ElementType;
  color:string;

  constructor(enumType:ElementType,color:string){
    this.enumType=enumType;
    this.color=color;
  }



}
