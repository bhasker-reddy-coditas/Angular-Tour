import { Injectable } from '@angular/core';
import { Hero } from './heros/hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(public messageService : MessageService) { }

  getHeroes1(): Hero[] {
    return HEROES;
  };
  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService : getHeroes () : HEROES fetched from mock-heros Model.')
    return of(HEROES);
  }
  getHeroById(id) :  Observable<Hero>{
    this.messageService.add(`Finding the Hero with  id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}
