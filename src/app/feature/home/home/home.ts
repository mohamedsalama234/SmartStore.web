import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ProductList } from '../../products/product-list/product-list';

@Component({
  selector: 'app-home',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
