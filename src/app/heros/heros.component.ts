import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {

  constructor(private heroService: HeroService) {
  }

  ngOnInit() {
    this.getHeroes();
  }

  //heroes = HEROES;

  heroes: Hero[];
  //Below click handler code is not required,will redirect using routing
  
    selectedHero: Hero;
    
    onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.heroService.messageService.add('HerosComponent : onSelect() : User selected '+hero.name);
    console.log(this.selectedHero);
  }

  getHeroes1(): void {
    // this.heroes  = this.heroService.getHeroes();
  }
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

}
