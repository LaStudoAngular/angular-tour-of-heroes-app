import { Component, OnInit } from '@angular/core';
import {Hero} from '../@models/hero';

@Component({
  selector: 'at-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  constructor() { }

  ngOnInit() { }

}
