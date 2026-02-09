import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductList } from './feature/products/product-list/product-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'smartstore-frontend';
}
