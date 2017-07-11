import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { FoodComponent } from '../food/food.component';
import { FoodDetailComponent } from '../food/food-detail/food-detail.component';
import { FoodAddComponent } from '../food/food-add/food-add.component';

const routes: Routes = [
  { path: '', component: FoodComponent , pathMatch: 'full' },
  { path: 'home', component: FoodComponent , pathMatch: 'full' },
  { path: 'food/:id',  component: FoodDetailComponent },
  { path: 'tambah',  component: FoodAddComponent },
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}