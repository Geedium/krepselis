import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {


  constructor(private productsService:ProductsService ) { }

  ngOnInit(): void {
  }

  public addProduct(name:HTMLInputElement, count:HTMLInputElement){
   
    this.productsService.addProduct(name.value, +count.value);

  }

}
