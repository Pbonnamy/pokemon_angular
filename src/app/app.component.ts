import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-pokemon';

  pokemons = [
    {
      img: "006"
    },
    {
      img: "009"
    }
  ]
}
