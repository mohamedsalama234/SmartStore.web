import { Component, OnInit } from '@angular/core';
import { Products } from '../../../services/products';
import { Product } from '../../../models/product.model';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule ,RouterLink],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList implements OnInit {
   products: Product[] = [];
  constructor(private productsService: Products) {}

  ngOnInit(): void {
    this.productsService.getAll().subscribe({
      next:data =>this.products = data,
      error:err=>console.log(err)

    });
    this.productsService.getAll().subscribe((res: any) => {
    this.products = res;
  });
  }
}
