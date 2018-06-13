import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../heros/hero';
import { MessageService } from '../message.service';
import { HeroService } from '../hero.service';
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  constructor(
    private heroService: HeroService,
    private location: Location,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
  }
  @Input() hero: Hero;

  onChange(hero: Hero): void {
    this.heroService.messageService.add('HeroDetailComponent : Hero Name Changed. New Name is ' + hero.name);
  }
}
