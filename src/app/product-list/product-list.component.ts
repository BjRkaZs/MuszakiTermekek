import { Component, OnInit } from '@angular/core';
import { BaseService } from '../base.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: any = [];
  newProduct: any = {
    category: '',
    description: '',
    id: 0,
    name: '',
    price: 0.0
  };

  constructor(private baseService: BaseService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.baseService.getProducts().subscribe((data) => {
      this.products = Object.entries(data).map(([key, value]: any) => ({
        firebaseKey: key,
        ...value
      }));
    });
  }

  addProduct(): void {
    this.baseService.postProduct(this.newProduct).subscribe(() => {
      this.newProduct = { category: '', description: '', id: 0, name: '', price: 0.0 };
      this.loadProducts();
    });
  }

  
  updateProduct(product: any): void {
    this.baseService.putProduct(product.firebaseKey, product).subscribe(() => {
      this.loadProducts();
    });
  }

  removeProduct(product: any): void {
    this.baseService.deleteProduct(product.firebaseKey).subscribe(() => {
      this.loadProducts();
    });
  }
}






// import { Component } from '@angular/core';
// import { BaseService } from '../base.service';
// import { map } from 'rxjs';

// @Component({
//   selector: 'app-product-list',
//   templateUrl: './product-list.component.html',
//   styleUrl: './product-list.component.css'
// })


// export class ProductListComponent {
//    muszakiTermekek:any={}
//     newProduct: any = {
//       category: '',
//       description: '',
//       id: 0,
//       name: '',
//       price: 0.0
//     };
//    columns=[
//     {key:"category", text:"Kategória", type:'text'},
//     {key:"description", text:"Leírás", type:'textarea'},
//     {key:"id", text:"Azonosító", type:'number'},
//     {key:"name", text:"Név", type:'text'},
//     {key:"price", text:"Ár", type:'number'},
//   ]
  
//   constructor(private base:BaseService){
//     this.base.getProducts().subscribe(
//       (res)=>this.muszakiTermekek=res
//     )
//   }
//   postProduct(){
//     this.base.postProduct(this.newProduct)
//     this.newProduct={}
//   }
  
//   putProduct(muszakiTermekek:any){
//     this.base.putProduct(muszakiTermekek)
//   }

//   deleteProduct(muszakiTermekek:any){
//     this.base.deleteProduct(muszakiTermekek)
//   }


// export class ProductListComponent {
//   muszakiTermekek: any = [];
//   newProduct: any = {
//     category: '',
//     description: '',
//     id: 0,
//     name: '',
//     price: 0.0
//   };
//   columns = [
//     { key: 'category', text: 'Kategória', type: 'text' },
//     { key: 'description', text: 'Leírás', type: 'textarea' },
//     { key: 'id', text: 'Azonosító', type: 'number' },
//     { key: 'name', text: 'Név', type: 'text' },
//     { key: 'price', text: 'Ár', type: 'number' }
//   ];

//   constructor(private base: BaseService) {
//     this.loadProducts();
//   }

//   loadProducts() {
//     this.base.getProducts().subscribe((res) => {
//       this.muszakiTermekek = Object.keys(res).map((key) => ({
//         key,
//         ...res[key]
//       }));
//     });
//   }

//   postProduct() {
//     this.base.postProduct(this.newProduct).subscribe(() => {
//       this.loadProducts(); // Újratöltjük a termékeket
//       this.resetForm();
//     });
//   }

//   putProduct(product: any) {
//     this.base.putProduct(product).subscribe(() => {
//       this.loadProducts(); // Frissítjük a terméklistát
//     });
//   }

//   deleteProduct(product: any) {
//     this.base.deleteProduct(product.key).subscribe(() => {
//       this.loadProducts(); // Frissítjük a terméklistát
//     });
//   }

//   resetForm() {
//     this.newProduct = {
//       category: '',
//       description: '',
//       id: 0,
//       name: '',
//       price: 0.0
//     };
//   }
// }


  // constructor(private base:BaseService){
  //   this.base.getProducts().snapshotChanges().pipe(
  //     map(
  //       (changes)=>changes.map(
  //         (c)=>({key:c.payload.key, ...c.payload.val()})
  //       )
  //      )
  //   ).subscribe(
  //     (res)=>this.muszakiTermekek=res
  //   )
  // }

  // postProduct(){
  //   this.base.postProduct(this.newProduct)
  //   this.newProduct={
  //     category: '',
  //     description: '',
  //     id: 0,
  //     name: '',
  //     price: 0.0
  //   }
  // }
  // putProduct(muszakiWebShop:any){
  //   this.base.putProduct(muszakiWebShop)
  // }
  // deleteProduct(muszakiWebShop:any){
  //   this.base.deleteProduct(muszakiWebShop)
  // }

