import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';
import { Food } from '../../modules/food-type';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  foods: Food[];

  constructor(
    private foodService: FoodService
  ) { }

  ngOnInit() {
    this.getFoods();
  }

  getFoods(){
    this.foodService.getFoods().then((foods) => {
      this.foods = foods;
    })
  }



}
