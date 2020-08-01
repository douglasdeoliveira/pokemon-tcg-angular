import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fromEvent } from 'rxjs';
import {
  filter,
  debounceTime,
  distinctUntilChanged,
  tap,
} from 'rxjs/operators';

import { Cards, PokemonCard } from '../../models';
import { PokemonService } from '../../services';

@Component({
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit, AfterViewInit {
  @ViewChild('search', { static: true }) input: ElementRef;

  public cards: PokemonCard[];

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService,
  ) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.data;
    const { cards } = routeParams.cards as Cards;

    this.cards = cards;
  }

  ngAfterViewInit(): void {
    // server-side search
    fromEvent(this.input.nativeElement, 'keyup')
      .pipe(
        filter(Boolean),
        debounceTime(500),
        distinctUntilChanged(),
        tap(() => {
          this.findCardByName(this.input.nativeElement.value);
        }),
      )
      .subscribe();
  }

  private async findCardByName(name: string) {
    const { cards } = await this.pokemonService.findByName(name).toPromise();

    this.cards = cards;
  }
}
