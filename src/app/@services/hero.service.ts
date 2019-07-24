import { Injectable } from '@angular/core';
import { Hero } from '../@models/hero';
import { HEROES } from '../@models/mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private messageService: MessageService, private http: HttpClient) {}

  private heroesUrl = 'api/heroes';

  getHeroes(): Observable<Hero[]> {
    this.log('heroes fetched successfully');
    return this.http
      .get<Hero[]>(this.heroesUrl)
      .pipe(catchError(this.handleError<Hero[]>('getHeroes', [])));
  }

  getHero(id: number): Observable<Hero> {
    // this.log('fetched hero id=${id}');
    this.messageService.addMessage(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find((el: Hero) => el.id === id));
  }

  private log(message: string): void {
    this.messageService.addMessage(`HeroService: ${message}`);
  }
}
