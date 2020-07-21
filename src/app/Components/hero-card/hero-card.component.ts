import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../../Services/heroes.service';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html'
})
export class HeroCardComponent implements OnInit {

@Input() hero:Hero;
@Input() index: number;

  constructor() { }

  ngOnInit(): void {
  }

}
