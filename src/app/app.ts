import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { ProductList } from './feature/products/product-list/product-list';
import { Auth } from './services/auth';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet ,RouterLink ,RouterModule,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'smartstore-frontend';

  constructor(public authService: Auth) {}
}
