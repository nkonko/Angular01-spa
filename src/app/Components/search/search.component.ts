import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../Services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})

export class SearchComponent implements OnInit {
  
  heroes:any[] = [];
  text:string;

  constructor(private activatedRoute:ActivatedRoute,
              private heroesService:HeroesService) {

   }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params =>
      {
       this.text = params['text'];
       this.heroes = this.heroesService.searchHero(params['text']);
      });
  }
}
