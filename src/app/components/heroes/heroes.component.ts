import { Component, OnInit } from "@angular/core";
import { HeroesService, Heroe } from "src/app/servicios/heroes.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styles: [],
})
export class HeroesComponent implements OnInit {
  heroes: Heroe[] = [];
  constructor(private _heroesServicio: HeroesService, private router: Router) {}

  ngOnInit() {
    this.heroes = this._heroesServicio.getHeores();
  }

  verHeroe(id: number) {
    this.router.navigate(["/heroe", id]);
  }
}
