import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {LandingPage} from '@landing/pages/landing/landing.page';
import {CommonModule} from '@angular/common';
//importing product and cart components
import { ProductPage } from '../product/pages/product/product.page';
import { CartPage } from '../product/pages/cart/cart.page';

export const appRoutes: Routes = [
    {
        path: 'landing',
        loadChildren: '@app/modules/landing/landing.module#LandingModule',
    },
    {
        path: 'products',
        loadChildren: '@app/modules/products/products.module#ProductsModule',
    },
    {
        path: 'product',
        loadChildren: '@app/modules/product/product.module#ProductModule',
    },
    //Registering a route
    {        
    //Add a route for product details with a path of product/:id and Product page component for the component
    
        path: 'product/:id',
        component: ProductPage,
    },
    //Registering a route
    {        
        //Add a route for cart details with a path of cart and Cart page component for the component
        
            path: 'cart',
            component: CartPage,
    },
    { path: '**', redirectTo: 'landing' }
];

@NgModule({
    imports: [
        HttpClientModule,
        RouterModule.forRoot(appRoutes),
         //importing common module
         CommonModule       
    ],
    exports: [
        RouterModule,
        HttpClientModule
    ],
    //declaring product page and cart page
    declarations: [ProductPage, CartPage]
})
export class CoreModule {
}