import { Component, OnInit } from '@angular/core';
import { Hero } from '../@models/hero';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../@services/hero.service';
import { Location } from '@angular/common';

@Component({
  selector: 'at-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss'],
})
export class HeroDetailComponent implements OnInit {
  hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location,
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id).subscribe((data: Hero) => (this.hero = data));
  }

  goBack(): void {
    this.location.back();
  }

  onSave(): void {
    this.heroService.updateHero(this.hero).subscribe(_ => this.goBack());
  }
}
