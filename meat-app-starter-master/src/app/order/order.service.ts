import { Injectable } from '@angular/core';
import { ShoppingCartService } from 'app/restaurant-detail/shopping-cart/shopping-cart.service';
import { CartItem } from 'app/restaurant-detail/shopping-cart/shopping-cart.model';
import { Order } from './order.model';
import { Observable } from 'rxjs/Observable';
import { Http, RequestOptions, Headers } from '@angular/http';
import { RestaurantsService } from 'app/restaurants/restaurants.service';

const URL = 'http://localhost:3000'

@Injectable()
export class OrderService {

  constructor(private cartService: ShoppingCartService, private http: Http,
              private restService: RestaurantsService) { }

  cartItems(): CartItem[]{
    return this.cartService.items
  }

  increaseQty(item: CartItem){
    this.cartService.increaseQty(item)
  }

  decreaseQty(item: CartItem){
    this.cartService.decreaseQty(item)
  }

  remove(item: CartItem){
    this.cartService.removeItem(item)
  }

  itemsValue(): number{
    return this.cartService.total()
  }

  checkOrder(order: Order): Observable <string>{
    const headers = new Headers()
    headers.append('Content-Type', 'application/json')
    return this.http.post(URL + '/orders', JSON.stringify(order), 
                new RequestOptions({headers: headers}))
                  .map(r => r.json())
                  .map(order => order.id)
  }

  clear(){
    this.cartService.clear()
  }
}
