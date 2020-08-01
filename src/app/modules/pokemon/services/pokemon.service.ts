import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from '@app/shared/services';

import { PokemonCard } from '../models';

interface Cards {
  cards: PokemonCard[];
}

@Injectable()
export class PokemonService {
  constructor(protected api: ApiService<PokemonCard>) {}

  list(): Observable<Cards> {
    return this.api.get('/cards');
  }
}
