import { Component, OnInit } from '@angular/core';
import { Food, Step, Recipe } from '../../modules/food-type';

import {NgForm} from '@angular/forms';
import { FOODS } from '../../modules/mock-food';

@Component({
  selector: 'app-food-add',
  templateUrl: './food-add.component.html',
  styleUrls: ['./food-add.component.css']
})
export class FoodAddComponent implements OnInit {

  foodURL: string = '';
  foodName: string = '';
  foodDescription: string = '';
  
  therecipeName: string = '';
  therecipeAmount: string = '';
  therecipeMeasure: string = '';

  thestepDescription: string = '';

  mainValue : Food;
  private  step: Step;

  private recipes: Recipe[] = [];
  private steps: Step[] = [];

  constructor() { }

  ngOnInit() {
  }

  addRecipe(_recipeName,_recipeAmount,_recipeMeasure){
     this.therecipeName = _recipeName.value;
     this.therecipeAmount = _recipeAmount.value;
     this.therecipeMeasure = _recipeMeasure.value;
    this.recipes.push(
      new Recipe(this.therecipeName,this.therecipeAmount,this.therecipeMeasure)
    );

    this.therecipeName = this.therecipeAmount = this.therecipeMeasure = '';
  }

  deleteRecipe(index){
    return this.recipes.splice(index,1);
  }

  addStep(_stepDescription){
    this.thestepDescription = _stepDescription.value;
    this.steps.push(
      new Step(this.thestepDescription)
    );

    this.thestepDescription = '';
  }

  deleteStep(index){
    return this.steps.splice(index,1);
  }

  addFood(){
    this.mainValue = {
      'id': Math.floor(Math.random() * (99 - 10 + 1)) ,
      'name' : this.foodName ,
      'description': this.foodDescription,
      'imageURL' : this.foodURL,
      'recipe' : this.recipes,
      'step' : this.steps,
     };

     FOODS.push(this.mainValue);

     console.log(FOODS);
  }

}
