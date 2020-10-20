import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Heroe, HeroesService } from "src/app/servicios/heroes.service";

@Component({
  selector: "app-search-heroe",
  templateUrl: "./search-heroe.component.html",
  styleUrls: ["./search-heroe.component.css"],
})
export class SearchHeroeComponent implements OnInit {
  heroes: Heroe[];
  constructor(
    private activatedRoute: ActivatedRoute,
    private heroesService: HeroesService,
    private router: Router
  ) {
    this.activatedRoute.params.subscribe((params) => {
      this.heroes = this.heroesService.searchHeroe(params["termino"]);
    });
  }

  ngOnInit() {
    console.log(this.heroes);
  }

  verHeroe(id: number) {
    this.router.navigate(["/heroe", id]);
  }
}
