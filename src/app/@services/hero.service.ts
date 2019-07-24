import { Injectable } from '@angular/core';
import { Hero } from '../@models/hero';
import { HEROES } from '../@models/mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private messageService: MessageService, private http: HttpClient) {}

  private heroesUrl = 'api/heroes';

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl).pipe(
      tap(_ => this.log(`heroes fetched successfully`)),
      catchError(this.handleError<Hero[]>('getHeroes', [])),
    );
  }

  getHero(id: number): Observable<Hero> {
    const URL = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(URL).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`)),
    );
  }

  private log(message: string): void {
    this.messageService.addMessage(`HeroService: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
