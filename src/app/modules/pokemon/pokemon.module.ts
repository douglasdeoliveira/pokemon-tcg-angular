import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared/shared.module';

import { PokemonIdComponent, PokemonListComponent } from './pages';
import { PokemonRoutingModule } from './pokemon-routing.module';
import { PokemonService } from './services';

@NgModule({
  declarations: [PokemonIdComponent, PokemonListComponent],
  imports: [CommonModule, SharedModule, PokemonRoutingModule],
  providers: [PokemonService],
})
export class PokemonModule {}
