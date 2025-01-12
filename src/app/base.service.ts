import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  private databaseURL = 'https://dolgozat-79584-default-rtdb.europe-west1.firebasedatabase.app/.json';

  constructor(private http: HttpClient) {}

  
  getProducts(): Observable<any> {
    return this.http.get(this.databaseURL);
  }


  postProduct(product: any): Observable<any> {
    return this.http.post(this.databaseURL, product);
  }


  putProduct(id: string, product: any): Observable<any> {
    const url = `https://dolgozat-79584-default-rtdb.europe-west1.firebasedatabase.app/${id}.json`;
    return this.http.put(url, product);
  }  


  deleteProduct(id: string): Observable<any> {
    const url = `https://dolgozat-79584-default-rtdb.europe-west1.firebasedatabase.app/${id}.json`;
    return this.http.delete(url);
  }
}









// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';

// @Injectable({
//   providedIn: 'root'
// })

// export class BaseService {
//   private databaseURL = 'https://dolgozat-79584-default-rtdb.europe-west1.firebasedatabase.app';
//   private getURL = 'https://dolgozat-79584-default-rtdb.europe-west1.firebasedatabase.app./.json';
//   private postURL = 'https://dolgozat-79584-default-rtdb.europe-west1.firebasedatabase.app./.json';
//   private putURL = 'https://dolgozat-79584-default-rtdb.europe-west1.firebasedatabase.app./<ID>.json';
//   private deleteURL = 'https://dolgozat-79584-default-rtdb.europe-west1.firebasedatabase.app. /<ID>.json';
//   private url =  'http://localhost:4200/'
//   constructor(private http: HttpClient) {this.databaseURL}


//   // refMuszakiWebShop:AngularFireList<any>

//   // constructor(private db: AngularFireDatabase) { 
//   //   this.refMuszakiWebShop=db.list('/products')
//   // }

//    allProducts(){
//     //return this.refMuszakiWebShop
//     this.http.get(this.getURL).subscribe(
//       (res:any)=>this.Sub.next(res.data))
//    }
   
//    getProducts(){
//     return this.http.get(this.getURL)
//    }
//    postProduct(){
//     this.http.push(this.postURL)
//    }   
//    putProduct(){
//     this.http.put(this.putURL)
//     // let key= muszakiWebShop.key
//     // delete muszakiWebShop.key
//     // this.refMuszakiWebShop.update(key,muszakiWebShop)
//    }

//    deleteProduct(){
//     this.http.delete(this.deleteURL)
//    }
// }


