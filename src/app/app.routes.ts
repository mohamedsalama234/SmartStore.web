import { Routes } from '@angular/router';
import { ProductList } from './feature/products/product-list/product-list';
import { Home } from './feature/home/home/home';

export const routes: Routes = [
  {path: '', component:Home},
  {path: 'products', component: ProductList},
];
