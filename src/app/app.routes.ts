import { Routes } from '@angular/router';
import { ProductList } from './feature/products/product-list/product-list';
import { Home } from './feature/home/home/home';
import { Register } from './feature/auth/register/register';
import { Login } from './feature/auth/login/login';
import { authGuard } from './Core/guards/auth-guard';
import { ProductDetails } from './feature/product-details/product-details/product-details';
import { CartServ } from './services/cart-serv';
import { Cart } from './feature/cart/cart/cart';

export const routes: Routes = [
  {path: '', component:Home},
  {path: 'products', component: ProductList ,canActivate: [authGuard]},
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  {path: 'productDetails/:id',component: ProductDetails, canActivate: [authGuard]},
  {path: 'cart', component: Cart, canActivate: [authGuard]}
];
