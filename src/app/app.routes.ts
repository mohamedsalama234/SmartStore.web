import { Routes } from '@angular/router';
import { ProductList } from './feature/products/product-list/product-list';
import { Home } from './feature/home/home/home';
import { Register } from './feature/auth/register/register';
import { Login } from './feature/auth/login/login';

export const routes: Routes = [
  {path: '', component:Home},
  {path: 'products', component: ProductList},
  { path: 'login', component: Login },
  { path: 'register', component: Register }
];
