import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '@shared/shared.module';

//importing newly created service for products into the module
import {ProductService} from '../product/pages/product/product.service';



export const productRoutes: Routes = [
    
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(productRoutes)
    ],
    //defining the service under "providers"
    providers: [ProductService]
})
export class ProductModule {
}
