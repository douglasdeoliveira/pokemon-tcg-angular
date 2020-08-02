import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardsResolverGuard, CardResolverGuard } from './guards';
import { PokemonListComponent, PokemonIdComponent } from './pages';

const routes: Routes = [
  {
    path: '',
    component: PokemonListComponent,
    resolve: { cards: CardsResolverGuard },
  },
  {
    path: 'card/:card_id',
    component: PokemonIdComponent,
    resolve: { card: CardResolverGuard },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokemonRoutingModule {}
