export enum ElementType {
  Bug="bug",
  Dark="dark",
  Dragon="dragon",
  Electric="electric",
  Fairy="fairy",
  Fighting="fighting",
  Fire="fire",
  Flying="flying",
  Ghost="ghost",
  Grass="grass",
  Ground="ground",
  Ice="ice",
  Normal="normal",
  Poison="poison",
  Psychic="psychic",
  Rock="rock",
  Steel="steel",
  Water="water",
}

export class PokemonType {
  enumType: ElementType;
  color: string;

  constructor(enumType: ElementType) {
    this.enumType = enumType;
    this.color = this.getColor(enumType);
  }

  getColor(el: ElementType): string {
    switch(el) {
      case ElementType.Bug:
        return "darkgreen";
      case ElementType.Dark:
        return "dimgrey";
      case ElementType.Dragon:
        return "steelblue";
      case ElementType.Electric:
        return "yellow";
      case ElementType.Fairy:
        return "pink";
      case ElementType.Fighting:
        return "orange";
      case ElementType.Fire:
        return "red";
      case ElementType.Flying:
        return "lightskyblue";
      case ElementType.Ghost:
        return "mediumpurple";
      case ElementType.Grass:
        return "green";
      case ElementType.Ground:
        return "brown";
      case ElementType.Ice:
        return "cyan";
      case ElementType.Normal:
        return "bisque";
      case ElementType.Poison:
        return "purple";
      case ElementType.Psychic:
        return "palevioletred";
      case ElementType.Rock:
        return "grey";
      case ElementType.Steel:
        return "slategray";
      case ElementType.Water:
        return "blue";
    }
  }
}
