import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-pokemon-dialog',
  templateUrl: './add-pokemon-dialog.component.html',
  styleUrls: ['./add-pokemon-dialog.component.css']
})
export class AddPokemonDialogComponent implements OnInit {
  types: string[] = ['normal', 'fire', 'water', 'electric', 'grass', 'ice', 'fighting', 'poison', 'ground', 'flying', 'psychic', 'bug', 'rock', 'ghost', 'dragon', 'dark', 'steel', 'fairy'];
  constructor(public ref: MatDialogRef<AddPokemonDialogComponent>) { }

  ngOnInit(): void {
  }

  save() {
    console.log("save");
  }
}
