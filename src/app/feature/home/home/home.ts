import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ProductList } from '../../products/product-list/product-list';
import { Navbar } from '../../../shared/components/navbar/navbar';

@Component({
  selector: 'app-home',
  imports: [RouterOutlet,Navbar],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
