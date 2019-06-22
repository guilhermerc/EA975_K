import { Component, OnInit } from '@angular/core';
import { HEROES} from '../mock-heroes';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

heroes: Hero[];
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
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }


}
