import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IPorduct } from 'src/core/Models/IProduct';
import { ProductsService } from 'src/core/Services/products.service';
import { SnackbarServiceService } from 'src/core/Services/snackbar-service.service';

@Component({
  selector: 'app-categories-products',
  templateUrl: './categories-products.component.html',
  styleUrls: ['./categories-products.component.scss']
})
export class CategoriesProductsComponent implements OnInit {
  constructor(private productService:ProductsService,private snackbar: SnackbarServiceService,private router:Router){}
  products:IPorduct[]=[]
  p:any
  errorMessage:any;
  ngOnInit(): void {
      this.productService.getAllProducts().subscribe({
        next:(response)=>{console.log(response);this.products=response;console.log(this.products)},
        error:error=>this.errorMessage=error
      })
      
  }
  updateProduct(productId:any)
  {
    this.router.navigate(['/categories/add-update',{id:productId}])

  }
  deleteProduct(productId:any)
  {
    if(confirm("Are You Sure To Delete This Product"))
    {
      this.productService.DeleteProduct(productId).subscribe({
        next:res=>{this.snackbar.success("Deleted Successfully")}
      })
      
    }
  }
  addNewProduct()
  {
   this.router.navigate(['/categories/add-update'])
  }

}
