import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardsResolverGuard } from './guards';
import { PokemonListComponent, PokemonIdComponent } from './pages';

const routes: Routes = [
  {
    path: '',
    component: PokemonListComponent,
    resolve: { cards: CardsResolverGuard },
  },
  { path: 'card/:pokemon_id', component: PokemonIdComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokemonRoutingModule {}
