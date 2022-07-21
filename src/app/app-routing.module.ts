import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BattleComponent } from './pages/battle/battle.component';
import { ErrorComponent } from './pages/error/error.component';
import { SelectComponent } from './pages/select/select.component';

const routes: Routes = [
  {
    path: '',
    component: SelectComponent,
  },
  {
    path: 'battle',
    component: BattleComponent,
  },
  { 
    path: '**', 
    component: ErrorComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
