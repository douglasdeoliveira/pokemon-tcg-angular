import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PokemonCard, Card } from '../../models';

@Component({
  templateUrl: './pokemon-id.component.html',
  styleUrls: ['./pokemon-id.component.scss'],
})
export class PokemonIdComponent implements OnInit {
  public card: PokemonCard;

  constructor(private route: ActivatedRoute, private location: Location) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.data;
    const { card } = routeParams.card as Card;

    this.card = card;
  }

  back(): void {
    this.location.back();
  }
}
