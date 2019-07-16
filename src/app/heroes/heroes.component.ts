import { Component, OnInit } from '@angular/core';
import { Hero } from '../@models/hero';
import { HEROES } from '../@models/mock-heroes';

@Component({
  selector: 'at-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = HEROES;
  selectedHero: Hero;

  constructor() { }

  ngOnInit() { }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
