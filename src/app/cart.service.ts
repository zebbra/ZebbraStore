import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Product } from "./products";

@Injectable({
  providedIn: "root",
})
export class CartService {
  items: Product[] = [];

  addToCart(product: Product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get<{ type: string; price: number }[]>("/assets/shipping.json");
  }

  deleteProductFromCart(productToDelete: Product) {
    let found = false;

    this.items.forEach(product => {
      if (!found) {
        if (product.id === productToDelete.id) {
          const spliceIndex = this.items.indexOf(productToDelete);
          this.items.splice(spliceIndex, 1);
          found = true;
        }
      }
    });
  }

  constructor(private http: HttpClient) {}
}
