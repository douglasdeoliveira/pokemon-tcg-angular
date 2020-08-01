import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokemonListComponent, PokemonIdComponent } from './pages';

const routes: Routes = [
  { path: '', component: PokemonListComponent },
  { path: '/:pokemon_id', component: PokemonIdComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokemonRoutingModule {}
