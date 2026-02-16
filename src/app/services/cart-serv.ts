import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CartServ {
  private baseUrl = environment.apiUrl + '/cart';

  constructor(private http: HttpClient) {}

  getCart() {
    return this.http.get(this.baseUrl);
  }

  addToCart(productId: number, quantity: number = 1) {
    return this.http.post(this.baseUrl, {
      productId,
      quantity
    });
  }

  removeFromCart(productId: number) {
    return this.http.delete(`${this.baseUrl}/${productId}`);
  }
}
