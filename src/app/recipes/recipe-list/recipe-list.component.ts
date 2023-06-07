import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { Recipe } from "../recipe.model";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      "A test recipe",
      "test recipe description",
      "https://4.bp.blogspot.com/-xz7jWsyj_Ec/Uk1BKIcX0hI/AAAAAAAAEQU/DaU0sc4aXis/s1600/Creamy+Slow+Cooker+Pot+Roast.jpg"
    ),
    new Recipe(
      "A test recipe",
      "test recipe description",
      "https://4.bp.blogspot.com/-xz7jWsyj_Ec/Uk1BKIcX0hI/AAAAAAAAEQU/DaU0sc4aXis/s1600/Creamy+Slow+Cooker+Pot+Roast.jpg"
    ),
  ];

  constructor() {}

  ngOnInit() {}

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
