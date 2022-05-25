import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from "@angular/material/grid-list";
import { PokemonStatsComponent } from './components/pokemon-stats/pokemon-stats.component';
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatCardModule} from "@angular/material/card";
import { BattleComponent } from './pages/battle/battle.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonStatsComponent,
    BattleComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatGridListModule,
        MatProgressBarModule,
        MatCardModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
