import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { PokemonStatsComponent } from './components/pokemon-stats/pokemon-stats.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { BattleComponent } from './pages/battle/battle.component';
import { AppRoutingModule } from './app-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BattleLogsComponent } from './components/battle-logs/battle-logs.component';

import localFR from '@angular/common/locales/fr';
import {registerLocaleData} from "@angular/common";
registerLocaleData(localFR)

@NgModule({
  declarations: [AppComponent, PokemonStatsComponent, BattleComponent, BattleLogsComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatProgressBarModule,
    MatCardModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [{provide: LOCALE_ID, useValue: 'fr-FR' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
