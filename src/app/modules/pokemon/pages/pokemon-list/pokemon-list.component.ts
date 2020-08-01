import { Component, OnInit } from '@angular/core';

import { PokemonService } from '../../services';

@Component({
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit {
  constructor(private pokemonService: PokemonService) {}

  async ngOnInit(): Promise<void> {
    const { cards } = await this.pokemonService.list().toPromise();

    console.log(cards);
  }
}
