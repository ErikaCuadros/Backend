import { Component, OnInit } from '@angular/core';
import { ProductModel, UpdateProductDto } from 'src/app/Modules/product.modul';
import { ProductHttpService } from 'src/app/service/product-http.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
//ngoninit se ejecuta luego del constructor
export class ProductComponent implements OnInit {
  //httpclient es una clase hacer las peticiones
  //products= *ngFor "let product of product"
  products : ProductModel[]=[];
  selectProduct: UpdateProductDto={};
  constructor( private productHttpService: ProductHttpService) {
    this.selectProduct ={name:'', price:0, description:''}
  }//Inyeccion de dependencia


  ngOnInit(): void {

    //this.getProduct();
    //this.getProducts();
    //this.createProduct();
    //this.updateProduct();
    //this.deleteProduct();
  }

  getProducts() {

   const url = 'https://api.escuelajs.co/api/v1/products';
    this.productHttpService.getAll().subscribe(
       response => {
       console.log(response);

      });
  }

//subscribe lista de espera va llegar la respuesta
//Observable trae la informacion
  getProduct() {
    const url = 'https://api.escuelajs.co/api/v1/products';
    return this.productHttpService.getOne(2).subscribe(
        response =>{
        console.log(response);

      });
  }
  createProduct() {
    const data = {
      name: 'esfero',
      price: 45,
      description: 'utiles escolares',
      categoryId: 1,
      images: ["https://api.lorem.space/image/watch?w=640&h=480&r=5922", "https://api.lorem.space/image/watch?w=640&h=480&r=3622"],
    }
    const url = 'https://api.escuelajs.co/api/v1/products/18';
    this.productHttpService.store(data).subscribe(
      response => {
      console.log(response);

    });
  }

  updateProduct() {
   const data = {
     title: 'zapatos',
     price: 60,
     description: 'calzado',
   }

    const url = 'https://api.escuelajs.co/api/v1/products/18';

    this.productHttpService.update(1, data).subscribe(
      response => {
      console.log(response);

    });

  }
  editProduct(product: ProductModel){
     this.selectProduct = product;
  }
  deleteProduct(id:ProductModel['id']){
    const url = 'https://api.escuelajs.co/api/v1/products/18';

    this.productHttpService.destroy(2).subscribe(
      response => {
      console.log(response);
    }
    );

  }

}