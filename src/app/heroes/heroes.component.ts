import { Component, OnInit } from '@angular/core';
import { Hero } from '../@models/hero';
import { HeroService } from '../@services/hero.service';

@Component({
  selector: 'at-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor( private heroService: HeroService ) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((data: Hero[]) => this.heroes = data);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
