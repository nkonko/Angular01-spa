import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { HeroesService } from '../../Services/heroes.service';
    

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html'
})

export class HeroComponent {

 hero:any = {};
 showMarvel:boolean = false;
 showDC:boolean = false;

  constructor(private activatedRoute:ActivatedRoute,
              private heroService: HeroesService) { 
   
    this.activatedRoute.params.subscribe(params => 
      {
        
        this.hero = heroService.getHeroById(params['id']);

        if (this.hero.casa == 'DC')
        {
          this.showDC = true;
        }
        else
        {
          this.showMarvel = true;
        }
      });

  }

  
}
