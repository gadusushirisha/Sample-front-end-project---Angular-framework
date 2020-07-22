import { Component, OnInit } from '@angular/core';
//import ActivatedRoute from the @angular/router package to combine the products data and route information to display the specific details for each product.
import { ActivatedRoute } from '@angular/router';
//impor product service which fetches data from json
import { ProductService } from './product.service';
import { Product } from '../../models/product.model';

//importing observable from rxjs package to fetch data by subscribing
import { Observable } from 'rxjs';

//import angular ngrx store package
import { Store, select } from '@ngrx/store';
//import cart from action.ts
import * as Cart from "../cart/actions";

@Component({
    selector: 'product-page',
    templateUrl: 'product.page.html'
})
export class ProductPage implements OnInit {

    //Define the product ID property
    productID: number;

    //define product$ observable of type product
    product$: Observable<Product>;

    observable: Observable<number>;
    badge;
    cart: Observable<Array<any>>
    product: Product;

    //Inject the ActivatedRoute into the constructor by adding it as an argument within the constructor's parentheses.
    //Also injecting product service and store into constructor
    constructor(private route: ActivatedRoute, private prdService: ProductService, private store: Store<any>) {
        this.productID = route.snapshot.params['id'];
        //calling the product service and getProductById method that fetches the data based on id
        prdService.getProductById(this.productID);

    }


    ngOnInit() {

        //caling method to product using asynchronoulsy
        this.getProductUsingAsyncPipe();

        //implementing select operator to retriev product from state
        //The "cart" here represents the product in state
        this.cart = this.store.select('cart');
    }

//calling getProductByiD method available in productservice to fetch the data based on product id
    getProductUsingAsyncPipe() {
        this.product$ = this.prdService.getProductById(this.productID);
    }

    //method to add the product to cart
    //this includes dispatch to get action which calls add product method and adds the product to cart
    addToCart(product) {
        this.store.dispatch(new Cart.AddProduct(product))
    }
}

