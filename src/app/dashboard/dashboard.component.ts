import { Component, OnInit } from '@angular/core';
import { Hero } from '../@models/hero';
import { HeroService } from '../@services/hero.service';

@Component({
  selector: 'at-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) {}

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((data: Hero[]) => (this.heroes = data.slice(1, 5)));
  }
}
