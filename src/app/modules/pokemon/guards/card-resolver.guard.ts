import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

import { Card } from '../models';
import { PokemonService } from '../services';

@Injectable({
  providedIn: 'root',
})
export class CardResolverGuard implements Resolve<Card> {
  constructor(private pokemonService: PokemonService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Card> {
    if (route.params?.card_id) {
      return this.pokemonService.findById(route.params.card_id);
    }

    return of(null);
  }
}
