import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-pokemon';

  pokemons = [
    {
      img: '006',
      pv: 250,
      currentPv: 125,
    },
    {
      img: '009',
      pv: 100,
      currentPv: 25,
    },
  ];
}
