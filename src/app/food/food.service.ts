import { Injectable } from '@angular/core';
import { FOODS } from '../modules/mock-food';
import { Food } from '../modules/food-type';

@Injectable()
export class FoodService {
    
    getFoods(): Promise<Food[]>{
        return Promise.resolve(FOODS);
    }

    getFood(foodId: number){
        return FOODS.find((food) =>  foodId === food.id );
    }
}

