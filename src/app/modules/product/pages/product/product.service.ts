import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//importing product model that is already available/pre-defined
import { Product } from '../../models/product.model';
//importing observable from rxjs package to fetch data by subscribing
import { Observable, of, throwError } from 'rxjs';
//importing tap operator
import { catchError, tap, map } from 'rxjs/operators';
 
@Injectable({
  providedIn: 'root'
})

//Creation of service to fetch product from product/:id endpoint using http client
export class ProductService {

 //Now inject actual HttpClient service in your service code to start using it.
  constructor(private http: HttpClient) { }
 productsUrl = 'http://localhost:3000/products/';

 //Implementing tap operator in observable to dispatch the get action
 getProductById(productID:  number): Observable<Product> {
    const url = `${this.productsUrl}/${productID}`;
    return this.http.get<Product>(url)
      .pipe(
        tap(data => console.log('getProduct: ' + JSON.stringify(data)))
      );
  }

  
  
}