import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';

import { Cards } from '../models';
import { PokemonService } from '../services';

@Injectable({
  providedIn: 'root',
})
export class CardsResolverGuard implements Resolve<Cards> {
  constructor(private pokemonService: PokemonService) {}

  resolve(): Observable<Cards> {
    return this.pokemonService.list();
  }
}
