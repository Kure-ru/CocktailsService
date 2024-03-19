import { Component, OnInit } from "@angular/core";
import { Cocktail } from "../cocktail.model";
import { CocktailService } from "../cocktail.service";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-cocktail-list",
  standalone: true,
  templateUrl: "./cocktail-list.component.html",
  imports: [CommonModule],
})
export class CocktailListComponent implements OnInit {
  cocktails: Cocktail[] = [];

  constructor(private service: CocktailService) {}

  ngOnInit() {
    this.cocktails = this.service.getCocktails();
  }
}
