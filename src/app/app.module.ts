import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ViewProductsComponent } from './components/view-products/view-products.component';

const appRoutes:Routes=[
  {path: '', component:ViewProductsComponent},
  {path: 'add',component:AddProductComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    ViewProductsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
