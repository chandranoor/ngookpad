import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FoodComponent } from './food/food.component';
import { AppRoutingModule } from './modules/app-route.module';

import { FoodListComponent } from './food/food-list/food-list.component';
import { FoodDetailComponent } from './food/food-detail/food-detail.component';
import { FoodItemComponent } from './food/food-list/food-item/food-item.component';
import { FoodService } from './food/food.service';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FoodAddComponent } from './food/food-add/food-add.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FoodComponent,
    FoodListComponent,
    FoodDetailComponent,
    FoodItemComponent,
    FoodAddComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [FoodService],
  bootstrap: [AppComponent]
})
export class AppModule { }
