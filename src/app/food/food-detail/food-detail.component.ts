import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';
import { Food } from '../../modules/food-type';
import { Router, ActivatedRoute } from '@angular/router';
import { FOODS } from '../../modules/mock-food';

@Component({
  selector: 'app-food-detail',
  templateUrl: './food-detail.component.html',
  styleUrls: ['./food-detail.component.css']
})
export class FoodDetailComponent implements OnInit {

  foods: Food[];
  foodDetail: Food;
  foodId: number;

  constructor(
    private foodService: FoodService,
    private router: Router,
    private route: ActivatedRoute,
    ) 
    {
      this.route.params.subscribe((params) => {this.foodId = +params['id']});

      console.log(FOODS);
     }

  ngOnInit() {
      this.foodDetail = this.foodService.getFood(this.foodId);
  } 
  
}
