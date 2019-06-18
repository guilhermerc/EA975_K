import { Component, OnInit } from '@angular/core';
import { HEROES} from '../mock-heroes';
import {Hero} from '../hero';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

heroes = HEROES;
flag = false;
selectedHero: Hero;
onSelect(hero: Hero): void {
  this.selectedHero = hero;

  if (this.flag == false)
  {
    this.flag = true;
  }
  else
  {
    this.flag = false;
  }


}

  constructor() { }

  ngOnInit() {
  }


}
