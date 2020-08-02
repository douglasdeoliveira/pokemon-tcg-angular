import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from '@app/shared/services';

import { Cards, Card } from '../models';

@Injectable()
export class PokemonService {
  constructor(protected api: ApiService) {}

  list(): Observable<Cards> {
    return this.api.get<Cards>('/cards');
  }

  findByName(name: string): Observable<Cards> {
    return this.api.get<Cards>(`/cards?name=${name}`);
  }

  findById(id: string): Observable<Card> {
    return this.api.get<Card>(`/cards/${id}`);
  }
}
