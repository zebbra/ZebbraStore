import { Component } from "@angular/core";

// Import dummy data
import { products } from "../products";

@Component({
  selector: "app-item-list",
  templateUrl: "./item-list.component.html",
  styleUrls: ["./item-list.component.scss"],
})
export class ItemListComponent {
  products = products;
  hi() {}

  constructor() {}
}
