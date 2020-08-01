import { Component, Input } from '@angular/core';

import { PokemonCard } from '../../models';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
})
export class PokemonCardComponent {
  @Input() card: PokemonCard;
}
