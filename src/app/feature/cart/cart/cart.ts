import { Component } from '@angular/core';
import { CartServ } from '../../../services/cart-serv';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  imports: [CommonModule],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {

  cart: any;
total = 0;

constructor(private cartService: CartServ) {}

ngOnInit() {
  this.loadCart();
}

loadCart() {
  this.cartService.getCart().subscribe((res: any) => {
    this.cart = res;
    this.calculateTotal();
  });
}

calculateTotal() {
  this.total = this.cart.items.reduce(
    (sum: number, item: any) =>
      sum + item.price * item.quantity,
    0
  );
}
remove(itemId: number) {
  this.cartService.removeFromCart(itemId).subscribe(() => {
    this.loadCart();
  });
}

}
