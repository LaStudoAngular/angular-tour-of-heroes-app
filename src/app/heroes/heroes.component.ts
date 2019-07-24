import { Component, OnInit } from '@angular/core';
import { Hero } from '../@models/hero';
import { HeroService } from '../@services/hero.service';

@Component({
  selector: 'at-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];

  constructor(private heroService: HeroService) {}

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((data: Hero[]) => (this.heroes = data));
  }

  onAdd(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.heroService.addHero({ name } as Hero).subscribe((hero: Hero) => {
      this.heroes.push(hero);
    });
  }

  onDelete(hero: Hero): void {
    this.heroes = this.heroes.filter((el: Hero) => el.id !== hero.id);
    this.heroService.deleteHero(hero).subscribe();
  }
}
