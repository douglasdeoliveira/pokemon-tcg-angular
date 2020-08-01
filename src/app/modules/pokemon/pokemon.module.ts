import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared/shared.module';

import { PokemonCardComponent } from './components';
import { CardsResolverGuard } from './guards';
import { PokemonIdComponent, PokemonListComponent } from './pages';
import { PokemonRoutingModule } from './pokemon-routing.module';
import { PokemonService } from './services';

@NgModule({
  declarations: [
    PokemonIdComponent,
    PokemonListComponent,
    PokemonCardComponent,
  ],
  imports: [CommonModule, SharedModule, PokemonRoutingModule],
  providers: [CardsResolverGuard, PokemonService],
})
export class PokemonModule {}
