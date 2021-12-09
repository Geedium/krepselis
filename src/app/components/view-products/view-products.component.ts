import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements OnInit {
  public products:Product[];

  constructor(public productsService:ProductsService) { }

  ngOnInit(): void {
    this.products=this.productsService.getProducts();
  }

  public removeProduct(index:number){
    this.productsService.removeProduct(index);
  }

}
