import { Component, OnInit } from '@angular/core';
import {HeroService} from '../hero.service';
import { Hero } from '../heros/hero';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public heroService : HeroService) { }

  heroes : Hero [];
  ngOnInit() {
    this.getHeroes();
  }
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(0,4));
  }
}
