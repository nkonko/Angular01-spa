import { Component, OnInit } from '@angular/core';
import { HeroesService, Hero } from '../../Services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
})

export class HeroesComponent implements OnInit {

  heroes:Hero[];

  constructor(private _heroesService: HeroesService) 
  {}

  ngOnInit(): void {
   this.heroes = this._heroesService.getHeroes();
  }
}
