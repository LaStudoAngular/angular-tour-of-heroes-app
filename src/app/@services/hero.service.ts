import { Injectable } from '@angular/core';
import { Hero } from '../@models/hero';
import { HEROES } from '../@models/mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(  private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.addMessage('HeroService: heroes fetched successfully');
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.addMessage(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find((el: Hero) => el.id === id));
  }
}
