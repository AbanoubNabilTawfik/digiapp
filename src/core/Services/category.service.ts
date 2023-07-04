import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CategoriesController } from '../APIs/CategoriesController';
import { Observable, catchError, throwError } from 'rxjs';
import { IPorduct } from '../Models/IProduct';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }

  getAllCategories()
  {
   return this.http.get(CategoriesController.GetAllCategories).pipe(catchError((error)=>{
      return throwError(()=>error.message ||"Server Error")
     }));
  }

  getAllProductsByCategoryName(categoryName:string):Observable<IPorduct[]>
  {
    return this.http.get<IPorduct[]>(CategoriesController.GetAllProductsByCategoryName+categoryName).pipe(catchError((error)=>{
      return throwError(()=>error.message ||"Server Error")
     }));
  }
}
