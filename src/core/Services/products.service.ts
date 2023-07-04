import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductsController } from '../APIs/ProductsController';
import { IPorduct } from '../Models/IProduct';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }

  getAllProducts():Observable<IPorduct[]>
  {
   return this.http.get<IPorduct[]>(ProductsController.GetAllProducts).pipe(catchError((error)=>{
    return throwError(()=>error.message ||"Server Error")
   }))
  }
  addProduct(product:any)
  {
    return this.http.post(ProductsController.AddProduct,product).pipe(catchError((error)=>{
      return throwError(()=>error.message ||"Server Error")
     }))
    }
  
  UpdateProduct(productId:any,product:any)
  {
    return this.http.put(ProductsController.AddProduct+"/"+productId,product).pipe(catchError((error)=>{
      return throwError(()=>error.message ||"Server Error")
     }));
  }
  GetProductById(productId:any)
  {
    return this.http.get(ProductsController.AddProduct+"/"+productId).pipe(catchError((error)=>{
      return throwError(()=>error.message ||"Server Error")
     }));
  }
  DeleteProduct(productId:any)
  {
    return this.http.get(ProductsController.DeleteProduct+"/"+productId).pipe(catchError((error)=>{
      return throwError(()=>error.message ||"Server Error")
     }));
  }
}
