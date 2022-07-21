import { LOCALE_ID, NgModule } from '@angular/core';
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
import {MatFormFieldModule} from '@angular/material/form-field';
import localFR from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
import { SelectComponent } from './pages/select/select.component';
import { HttpClientModule } from '@angular/common/http';
import { SelectPokemonComponent } from './components/select-pokemon/select-pokemon.component';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import {MatDividerModule} from '@angular/material/divider';
import { ErrorComponent } from './pages/error/error.component';
import { AddPokemonDialogComponent } from './components/add-pokemon-dialog/add-pokemon-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule }   from '@angular/forms';

registerLocaleData(localFR);

@NgModule({
  declarations: [
    AppComponent,
    PokemonStatsComponent,
    BattleComponent,
    BattleLogsComponent,
    SelectComponent,
    SelectPokemonComponent,
    PokemonCardComponent,
    ErrorComponent,
    AddPokemonDialogComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatProgressBarModule,
    MatCardModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    MatDividerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'fr-FR' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
