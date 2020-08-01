import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from '@app/shared/services';

import { Cards } from '../models';

@Injectable()
export class PokemonService {
  constructor(protected api: ApiService) {}

  list(): Observable<Cards> {
    return this.api.get<Cards>('/cards');
  }

  findByName(name: string): Observable<Cards> {
    return this.api.get<Cards>(`/cards?name=${name}`);
  }
}
