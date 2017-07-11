import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  shoppingListItems = [];
  selectedItem = [];

  clickSelected(item) {
    console.log(item);
    return this.selectedItem = item;
  }

  deleteSelected(item) {
    console.log(item);
    if ((item).length !== 0) {
      this.shoppingListItems.splice(this.shoppingListItems.indexOf(this.selectedItem), 1);
      this.selectedItem = [];
    }
  }

  addItem(itemName, itemAmount) {
    return this.shoppingListItems.push({ name: itemName.value, amount: itemAmount.value });
  }
}
