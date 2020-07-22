import {NgModule} from '@angular/core';
import {AppComponent} from '@app/app.component';
import {CoreModule} from '@core/core.module';
import {BrowserModule} from '@angular/platform-browser';
//Import HttpClientModule module from @angular/common/http package into the root module and add it’s entry in imports attribute of @NgModule.
import { HttpClientModule } from '@angular/common/http'; 

import { StoreModule } from "@ngrx/store";
import { reducer } from '../app/modules/product/pages/cart/reducer';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        CoreModule,
        BrowserModule,
        //now
        HttpClientModule,
        StoreModule.forRoot({cart: reducer})        
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
