import { Component } from '@angular/core';
import { Products } from '../../../services/products';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CartServ } from '../../../services/cart-serv';

@Component({
  selector: 'app-product-details',
  imports: [CommonModule],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails {
product: any;

constructor(
  private productsService: Products,
  private router :ActivatedRoute,
  private cartService: CartServ
){}
 ngOnInit() {
    const id = this.router.snapshot.paramMap.get('id');

    this.productsService.getById(Number(id)).subscribe(res => {
      this.product = res;
    });
  }
  addToCart() {
  this.cartService.addToCart(this.product.id).subscribe(() => {
    alert('Added to cart successfully');
  });
}
}
