import { CartService } from "../cart.service";
import { Component } from "@angular/core";
import { Product } from "../products";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.scss"],
})
export class CartComponent {
  constructor(private cartService: CartService) {}

  products = this.cartService.getItems();

  deleteProduct(product: Product) {
    this.cartService.deleteProductFromCart(product);
  }
}
