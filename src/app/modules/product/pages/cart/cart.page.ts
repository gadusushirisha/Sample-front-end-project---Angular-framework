import {Component, OnInit} from '@angular/core';
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs/Observable";
import * as Cart from "./actions";

@Component({
    selector: 'cart-page',
    templateUrl: 'cart.page.html'
})
export class CartPage implements OnInit {
    cart: Observable<Array<any>>;
   constructor(private store:Store<any>) {
    this.cart = this.store.select('cart');
   }
    
    ngOnInit() {}  

    //implementing dispatch to get action to call remove product method when user clicks remove on front end
    removeFromCart(product) {
        this.store.dispatch(new Cart.RemoveProduct(product));
      }
}




