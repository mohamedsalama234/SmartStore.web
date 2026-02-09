import { Component, OnInit } from '@angular/core';
import { Products } from '../../../services/products';
import { Product } from '../../../models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule],
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
  }
}
