import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  public products:Product[]=[];

  constructor() { 
    if (localStorage.products){
      this.products= JSON.parse(localStorage.getItem('products'));
    }
  }

  public getProducts(){
    return this.products;
  }

  public addProduct(name:string, count:number){
    this.products.push(new Product(name,count));
    localStorage.setItem('products', JSON.stringify(this.products));
  }

  public removeProduct(index:number){
    this.products.splice(index,1);
    localStorage.setItem('products', JSON.stringify(this.products));
  }
}
